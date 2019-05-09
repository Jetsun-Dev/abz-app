<template>
  <div class="relationships" id="relationships">
    <h2>{{ mainTitle }}</h2>
    <div class="content-block">
      <div class="tech-block" v-for="(item, index) in blocks" :key="index">
        <img :src="item.imgpath" alt="Technology image">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Relationships",
  data() {
    return {
      mainTitle: "About my relationships with web-development",
      blocks: [
        {
          title: "I'm in love with HTML",
          text: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
          imgpath: require("../assets/imgs/html.svg")
        },
        {
          title: "CSS is my best friend",
          text: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
          imgpath: require("../assets/imgs/css.svg")
        },
        {
          title: "JavaScript is my passion",
          text: "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
          imgpath: require("../assets/imgs/javascript.svg")
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
  .relationships{
    padding: 44px 0 46px;
    @media screen and (min-width: 768px) {
      padding: 96px 0 59px;
    }
    @media screen and (min-width: 1024px) {
      padding: 116px 47px 125px;
    }
    @media screen and (min-width: 1280px) {
      margin: 0 auto;
      padding: 118px 15px 127px;
      max-width: 1170px;
    }
  }
  h2{
    @media screen and (min-width: 768px) {
      width: 70%;
      margin: 35px auto;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
      margin: 35px auto 38px;
    }
    @media screen and (min-width: 1280px) {
      width: 50%;
    }
  }
  .content-block{
    @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .tech-block{
    margin: 0 auto 27px;
    width: 87%;
    padding-top: 5px;
    @media screen and (min-width: 768px) {
      width: 77%;
      margin: 0 auto 67px;
      &:nth-of-type(2){
        margin: 0 auto 45px;
      }
    }
    @media screen and (min-width: 1024px) {
      width: 31%;
      text-align: left;
      margin: 0;
      &:nth-of-type(2){
        margin: 0;
        p{
          width: 80%;
        }
      }
    }
  }
  h3{
    margin: 5px 0 0;
    @media screen and (min-width: 768px) {
      text-align: left;
      margin: -2px 0 0;
    }
  }
  p{
    margin-top: 0;
    line-height: 22px;
    @media screen and (min-width: 768px) {
      text-align: left;
      margin-top: 4px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 7px;
    }
  }
  img{
    object-fit: contain;
    width: 90px;
    @media screen and (min-width: 768px) {
      float: left;
      margin-right: 34px;
    }
    @media screen and (min-width: 1024px) {
      float: none;
      margin: 0 0 20px;
      width: 99px;
    }
  }
</style>