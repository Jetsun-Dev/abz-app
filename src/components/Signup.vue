<template>
  <div class="sign-up" id="sign-up">
    <h2>{{ title }}</h2>
    <p class="subtitle">{{ subtitle }}</p>
    <form @submit.prevent="registerUser" ref="mainForm" id="mainForm">
      <div class="form-name">
        <label for="user-name" :class="{'error-label': $v.userName.$error}">Name</label>
        <input type="text" name="username" id="user-name" placeholder="Your name" v-model="userName" @blur="$v.userName.$touch()" :class="{'error-input': $v.userName.$error}">
        <div class="form__input-error" v-if="$v.userName.$error">Name is required and length should be more than {{$v.userName.$params.minLength.min}} letters</div>
      </div>
      <div class="form-email">
        <label for="user-email" :class="{'error-label': $v.userEmail.$error}">Email</label>
        <input type="email" name="useremail" id="user-email" placeholder="Your email" v-model="userEmail" @blur="$v.userEmail.$touch()" :class="{'error-input': $v.userEmail.$error}">
        <div class="form__input-error" v-if="$v.userEmail.$error">Email is required</div>
      </div>
      <div class="form-phone">
        <label for="user-phone">Phone</label>
        <masked-input type="tel" name="userphone" placeholder="Your phone" id="user-phone" mask="\+38\ (+++) +++ ++ ++" v-model="userPhone" @blur="$v.userPhone.$touch()" :class="{'error-input': $v.userPhone.$error}"/>
        <div class="form__input-error" v-if="$v.userPhone.$error">Phone number is invalid</div>
      </div>
      <div class="form-select">
        <select name="select-position" id="user-positions" v-model="userSelect" @blur="$v.userSelect.$touch()" :class="{'error-input': $v.userSelect.$error}">
          <option disabled selected value="default">Select your position</option>
          <option v-for="(position, index) in positions" :key="index" :value="position.id">{{ position.name }}</option>
        </select>
        <div class="arrow-down"></div>
        <div class="form__input-error" v-if="$v.userSelect.$error">Please choose your position</div>
      </div>
      <div class="form-file">
        <label for="user-file" class="file-label">Upload your photo <div class="file-label__wrap"><img class="file-icon" src="../assets/icons/upload.svg"></div></label>
        <input type="file" name="userfile" id="user-file">
        <div class="form-file__desc">{{ fileDescr }}</div>
      </div>
      <button class="form-submit" :disabled="$v.$invalid">Sign Up</button>
    </form>
    <div class="main-overlay" v-if="successReg"></div>
    <div class="signup-popup" v-if="successReg">
      <h3>Congratulations</h3>
      <p class="popup-text">You have successfully passed the registration</p>
      <span class="popup-ok" @click="closeReset">OK</span>
    </div>
  </div>
</template>

<script>

import MaskedInput from 'vue-masked-input'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  name: "Signup",
  data() {
    return {
      title: "Register to get a work",
      subtitle: "Attention! After successful registration and alert, update the list of users in the block from the top",
      userName: '',
      userEmail: '',
      userPhone: '___________',
      userSelect: 'default',
      fileDescr: 'File format jpg up to 5MB, the minimum size of 70x70px',
      positions: [],
      token: '',
      successReg: false
    };
  },
  validations: {
    userName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60)
    },
    userEmail: {
      required,
      email
    },
    userPhone: {
      required,
      hasNumbers: function(newTel) {
          let regexp2 = /\d/;
          let arr = newTel.split('');
          let sarr = arr.filter(el => regexp2.test(el));
          return (sarr.length === 12 && +sarr[2] === 0) ? true : false;
      }
    },
    userSelect: {
      required,
      notDefault: function(option) {
        return option !== 'default'
      }
    }
  },
  components: { 
    MaskedInput
  },
  methods: {
    registerUser(event) {

      let fixPhone = this.userPhone.split('').filter(el => el !== ')' && el !== '(' && el !== ' ').join('');
      var formData = new FormData();
      var fileField = document.querySelector('input[type="file"]');
      formData.append('position_id', this.userSelect);
      formData.append('name', this.userName);
      formData.append('email', this.userEmail);
      formData.append('phone', fixPhone);
      formData.append('photo', fileField.files[0]);

      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: {
          'Token': this.token,
        },
      })
      .then(function(response) {
        console.log(response.status);
        return response.json();
      })
      .then(data => (data.success ? this.successReg = true : this.successReg = false))
      .catch(function(error) {
        console.log(error);
      });
      event.target.reset();
    },
    closeReset() {
      this.successReg = false;
      this.$store.commit('refreshUsers');
    }

  },
  mounted() {
    axios
      .get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(response => (this.positions = response.data.positions))
      .catch(error => console.log(error));

    axios
      .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => {
        this.token = response.data.token;
        })
      .catch(error => console.log(error));
  }

};
</script>

<style scoped lang="less">
.sign-up {
  width: 100%;
  padding: 47px 0 71px;
  @media screen and (min-width: 768px) {
    padding: 37px 24px 129px;
  }
  @media screen and (min-width: 1024px) {
    padding: 57px 47px 148px;
  }
  @media screen and (min-width: 1280px) {
    padding: 57px 15px 159px;
    max-width: 1170px;
    margin: 0 auto;
  }
}
h2 {
  width: 90%;
  margin: 0 auto 10px;
  @media screen and (min-width: 768px) {
    margin: 0 auto 21px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 auto 14px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto 12px;
  }
}
p {
  line-height: 22px;
  width: 90%;
  margin: 0 auto;
}
.subtitle {
  color: #000;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 50%;
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
}
form{
  margin-top: 23px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 43px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 52px;
  }
}
.form__input-error{
    color: red;
    font-size: 12px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    text-align: left;
    margin-left: 30px;
    margin-top: -10px;
    @media screen and (min-width: 768px) {
      width: 180px;
      margin-left: 17px;
    }
}
div[class^="form-"] {
  position: relative;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 21px;
  }
}
input, select, .file-label{
  width: 290px;
  height: 55px;
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  margin: 10px auto;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  color: #000;
  font-weight: 400;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
  @media screen and (min-width: 1024px) {
    width: 290px;
  }
  @media screen and (min-width: 1280px) {
    width: 360px;
  }
}
input:focus, select:focus, .file-label:focus{
  border-width: 2px;
  outline: none;
}
#user-phone{
  color: #000;
  &:focus{
    color: #000;
  }
}
#user-positions{
  background: #fff;
}
.file-label{
  position: relative;
  display: block;
  line-height: 55px;
  padding: 0 0 0 15px;
  text-align: left;
  color: #b7b7b7;
  left: 0;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
  @media screen and (min-width: 1280px) {
    width: 555px;
  }
  &__wrap{
    width: 55px;
    height: 55px;
    position: absolute;
    right: 0;
    top: -1px;
    border: 2px solid #ef6c00;
    border-radius: 5px;
    text-align: center;
    @media screen and (min-width: 768px) {
      width: 130px;
      img{
        display: none;
      }
      &::before{
        content: 'Upload';
        font-size: 20px;
        font-family: 'Source Sans Pro', sans-serif;
        color: #ef6c00;
        font-weight: 700;
        line-height: 50px;
      }
  }
  }
}
.file-icon{
  width: 25px;
  height: 25px;
  margin-top: 15px;
}

select {
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;
  color: #000;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
  @media screen and (min-width: 1280px) {
    width: 555px;
  }
}
.arrow-down{
  width: 0; 
  height: 0; 
  border-style: solid;
  border-width: 9px 9px 0 9px;
  border-color: #000000 transparent transparent transparent;
  position: absolute;
  top: 34px;
  right: 30px;
  pointer-events: none;
  @media screen and (min-width: 768px) {
    right: 10px;
  }
}
option:checked {
  color: #ef6c00;
}

input::placeholder {
  color: #b7b7b7;
}
input[type="file"] {
  visibility: hidden;
  position: absolute;
  right: 500px;
}
label{
  font-size: 12px;
  font-family: "Source Sans Pro", sans-serif;
  color: #b7b7b7;
  padding: 5px;
  background: #fff;
  z-index: 2;
  position: absolute;
  left: 25px;
  top: -3px;
  @media screen and (min-width: 768px) {
    left: 12px;
  }
}
.error-input{
  border-color: red;
}
.error-label{
  color: red;
}
.form-submit {
  color: #fff;
  width: 290px;
  height: 40px;
  line-height: 35px;
  background-color: #ef6c00;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  border: none;
  text-align: center;
  margin-top: 4px;
  @media screen and (min-width: 768px) {
    margin: -9px auto;
    line-height: 35px;
  }
}
.form-submit:disabled{
  background-color: #d7d7d7;
  color: #8d8d8c;
}
.form-file{
  margin-top: 29px;
  @media screen and (min-width: 768px) {
    margin-top: 3px;
  }
  &__desc{
    font-size: 12px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    color: #b7b7b7;
    width: 80%;
    margin-left: 30px;
    text-align: left;
    top: -8px;
    @media screen and (min-width: 1024px) {
      margin-left: 20px;
    }
  }
}
.main-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 100;
}
.signup-popup{
  position: fixed;
  top: 30%;
  left: 5%;
  width: 90%;
  height: 180px;
  background: #fff;
  z-index: 101;
  border-radius: 4px;
  text-align: left;
  padding: 0 24px;
  @media screen and (min-width: 1024px) {
    width: 290px;
    left: 40%;
  }
  h3{
    margin-bottom: 8px;
    @media screen and (min-width: 1024px) {
      font-size: 22px;
    }
  }
}
.popup-text{
  margin: 0;
  width: 100%;
}
.popup-ok{
  color: #ef6c00;
  float: right;
  margin: 32px 0 0;
  font-size: 20px;
  cursor: pointer;
}

</style>