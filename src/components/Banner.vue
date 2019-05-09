<template>
  <div class="banner">
    <div class="supwrap">
      <h1>{{ title }}</h1>
      <p v-if="deviceWidth < 768">{{ text }}</p>
      <p v-if="deviceWidth >= 768">{{ text2 }}</p>
      <a href="#sign-up">Sign Up</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      deviceWidth: window.innerWidth,
      title: "Test assignment for Frontend Developer position",
      text: "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.",
      text2: "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"
    };
  }
};
</script>

<style scoped lang="less">
.banner{
  min-height: 393px;
  width: 100%;
  background-image: url(../assets/banner-bg-320.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 47px;
  @media screen and (min-width: 768px) {
    background-image: url(../assets/baner-bg-768.jpg);
    min-height: 623px;
    padding-left: 24px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url(../assets/baner-bg-1024.jpg);
    min-height: 726px;
    padding: 50px 47px 0;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(../assets/baner-bg-1280.jpg);
    min-height: 677px;
    padding: 50px 0;
  }
}
.supwrap{
  @media screen and (min-width: 1280px) {
    padding: 0 15px;
    max-width: 1170px;
    margin: 0 auto;
  }
}
h1{
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    text-align: left;
    width: 50%;
    line-height: 50px;
    margin: 67px 0 22px;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    line-height: 60px;
    margin: 84px 0 19px;
  }
  @media screen and (min-width: 1280px) {
    margin: 83px 0 19px;
  }
}
h1, p{
  color: #fff;
}
p{
  font-size: 16px;
  line-height: 22px;
  width: 90%;
  margin: 0 auto 38px;
  @media screen and (min-width: 768px) {
    text-align: left;
    width: 52%;
    font-size: 18px;
    margin: 0 0 33px;
    line-height: 24px;
  }
  @media screen and (min-width: 1024px) {
    width: 46%;
    font-size: 20px;
    margin: 0 0 40px;
    line-height: 26px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 0 34px;
  }
}
a {
  color: #fff;
  width: 290px;
  height: 40px;
  line-height: 40px;
  display: block;
  background-color: #ef6c00;
  border-radius: 5px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
}
</style>