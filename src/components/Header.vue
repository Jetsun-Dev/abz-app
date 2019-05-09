<template>
  <header>
    <div class="overlayer" v-if="burgerState" @click="burgerState = false"></div>
    <div class="header-wrap">
      <div class="flex-wrap">
        <div class="header-logo">
          <img class="header-logo__img" src="../assets/header-logo-320.png" alt="abz-agency logo">
        </div>
        <ul class="header-menu" v-if="deviceWidth >= 1024">
          <li v-for="(value, key) in headerMenu" :key="key"><a :href="value">{{ key }}</a></li>
        </ul>
        <div class="header-user-block" v-if="deviceWidth >= 1024">
          <div class="user-info">
            <p>{{ currentUser.name }}</p>
            <p>{{ currentUser.email }}</p>
          </div>
          <img :src="currentUser.photo" alt="User image">
        </div>
        <div class="header-signout" v-if="deviceWidth >= 1024"><a href="#"><img src="../assets/icons/sign-out.svg" alt="signout"></a></div>
        <div class="header-burger" v-if="deviceWidth < 1024" @click="burgerState = true">
          <img src="../assets/icons/line-menu.svg" alt="Header burger icon" class="header-burger__icon">
        </div>
        <div class="header-burger-content" v-if="burgerState">
          <div class="burger-user-block">
            <img :src="currentUser.photo" alt="User image">
            <div class="burger-user-info">
              <p>{{ currentUser.name }}</p>
              <p>{{ currentUser.email }}</p>
            </div>
          </div>
          <ul class="burger-menu">
            <li v-for="(value, key) in headerMenu" :key="key" @click="burgerState = false"><a :href="value">{{ key }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import axios from 'axios'

export default {
  name: "Header",
  data() {
    return {
      deviceWidth: window.innerWidth,
      burgerState: false,
      currentUser: {}
    };
  },
  computed: {
    headerMenu() {
      return this.$store.state.mainMenu
    }
  },
  mounted() {
    axios
      .get('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
      .then(response => (this.currentUser = response.data.user))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped lang="less">

li {
  display: inline-block;
  margin: 0 1%;
  line-height: 80px;
  @media screen and (min-width: 1024px) {
    margin: 0 30px 0 0;
    line-height: 64px;
    font-size: 16px;
  }
}
a {
  color: #000;
}
header{
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
}
.header-wrap{
  display: block;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 1280px) {
    width: 1170px;
    margin: 0 auto;
  }
}
.flex-wrap{
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding: 0 47px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 15px;
  }
}
.header-logo{
  width: 135px;
  height: 25px;
  margin-left: 18px;
  @media screen and (min-width: 768px) {
    margin-left: 22px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 66px 0 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 97px 0 0;
  }
}
.header-menu{
  display: flex;
  align-items: center;
  width: 60%;
  @media screen and (min-width: 1280px) {
    width: auto;
  }
}
.header-user-block{
  height: 64px;
  display: flex;
  @media screen and (min-width: 1280px) {
    position: relative;
    left: 80px;
  }
}
.user-info {
  margin-right: 12px;
  p:first-of-type{
    line-height: 16px;
    margin: 14px 0 0 0;
    text-align: right;
    font-size: 14px;
  }
  p:nth-of-type(2) {
    line-height: 16px;
    margin: 2px 0;
    text-align: right;
    font-size: 12px;
    color: #8d8c8c;
  }
}
.header-user-block img{
  object-fit: contain;
  display: block;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: auto;
}
.header-signout{
  margin-left: 12px;
  img{
    position: relative;
    top: 3px;
  }
}
.header-burger{
  display: block;
  margin-right: 18px;
  height: 22px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-right: 25px;
  }
}
.header-burger__icon{
  object-fit: contain;
}
.header-burger-content{
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  padding: 30px 15px;
  z-index: 101;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 30px 24px;
  }
}
.burger-user-block{
  position: relative;
  padding-bottom: 20px;
}
.burger-user-block:after{
  content: '';
  height: 1px;
  width: 120%;
  background: #000;
  opacity: 0.2;
  position: absolute;
  bottom: 0;
  left: -20px;
}
.burger-user-block img{
  object-fit: contain;
  display: block;
  border-radius: 50%;
  height: 68px;
  width: 68px;
}
.burger-user-info{
  text-align: left;
  p:first-of-type{
    font-size: 20px;
    margin: 12px 0 0;
  }
    p:nth-of-type(2){
    font-size: 13px;
    color: #8d8c8c;
    margin: 2px 0 4px;
  }
}
.burger-menu{
  margin-top: 20px;
}
.burger-menu li{
  display: block;
  line-height: 40px;
  text-align: left;
  a{
    font-size: 16px;
  }
}
.overlayer{
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: 100;
}


</style>