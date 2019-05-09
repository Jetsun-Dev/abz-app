<template>
  <div class="users" id="users">
    <h2>{{ title }}</h2>
    <p class="subtitle">{{ subtitle }}</p>
    <div class="users-block">
      <div class="users__list" v-for="(user, index) in getApiUsers" :key="index" ref="usersRef">
        <img :src="user.photo" alt="User image">
        <h3>{{ user.name }}</h3>
        <p class="users__list__p">{{ user.position }}</p>
        <p class="users__list__p">{{ user.email }}</p>
        <p class="users__list__p">{{ user.phone }}</p>
      </div>
    </div>
    <button @click.prevent="showMore" :disabled="!getApiLink">Show More</button>
  </div>
</template>

<script>

import axios from 'axios'
const url = require('url')

export default {
  name: "Users",
  data() {
    return {
      deviceWidth: window.innerWidth,
      title: "Our cheerful users",
      subtitle: "Attention! Sorting users by registration date",
      apiUsers: []
    }
  },
  methods: {
    showMore() {
      axios
        .get(this.getApiLink)
        .then(response => {
        this.$store.state.apiUsers = this.$store.state.apiUsers.concat(response.data.users.sort((a, b) => b.registration_timestamp - a.registration_timestamp));
        this.$store.commit('changeApiLink', response.data.links.next_url);
        })
        .catch(error => console.log(error));
    }

  },
  computed: {
    getApiLink() {
      return this.$store.state.apiLink
    },
    getApiUsers() {
      return this.$store.state.apiUsers
    }
  },
  mounted() {
    let count = ''
    if(this.deviceWidth < 750) {
      count = '3'
    } else count = '6'

    axios
      .get(this.getApiLink + count)
      .then(response => {
        this.$store.state.apiUsers = response.data.users.sort((a, b) => b.registration_timestamp - a.registration_timestamp);
        this.$store.state.apiLink = response.data.links.next_url;
        })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped lang="less">

.users {
  width: 100%;
  padding: 67px 0 20px;
  &__list__p{
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    padding: 113px 24px 96px;
    &__list{
      width: 30%;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 133px 47px 96px;
    &__list{
      text-align: left;
      margin-bottom: 60px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 133px 15px 96px;
    max-width: 1170px;
    margin: 0 auto;
  }
}
.users-block{
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
    margin-bottom: 46px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 60px;
    margin-bottom: 0;
  }
}
h2 {
  width: 90%;
  margin: 0 auto 13px;
}
h3{
  margin-bottom: 5px;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 2px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 25px;
    margin-left: 80px;
    width: 210px;
  }
}
p {
  line-height: 20px;
  width: 90%;
  margin: 0 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    margin-left: 80px;
    width: 210px;
  }
}
.subtitle{
  color: #000;
  width: 50%;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin: 0 auto;
  }
}
img {
  object-fit: contain;
  display: block;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin: 30px auto 10px;
  @media screen and (min-width: 1024px) {
    margin: 0 10px -50px 0;
    float: left;
  }
}
button {
  color: #ef6c00;
  width: 290px;
  height: 40px;
  line-height: 35px;
  display: block;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #ef6c00;
  margin: 20px auto 0;
  font-size: 20px;
  font-weight: 700;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
}
button:disabled{
  background-color: #d7d7d7;
  color: #8d8d8c;
  border: none;
}
</style>