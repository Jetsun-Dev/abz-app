<template>
  <div class="about-me" id="about-me">
    <h2>{{ title }}</h2>
    <img src="../assets/imgs/man-mobile.svg" alt="Developer image">
    <div class="text-block">
      <h3>{{ subtitle }}</h3>
      <p class="description">{{ description1 }}</p>
      <p class="description">{{ description2 }}</p>
      <a href="#sign-up">Sign Up</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Aboutme",
  data() {
    return {
      title: "Let's get acquainted",
      subtitle: "I am cool frontend developer",
      description1: "When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.",
      description2: "Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web."

    };
  }
};
</script>

<style scoped lang="less">
  .about-me{
    padding-top: 45px;
    @media screen and (min-width: 768px) {
      padding: 76px 24px 0;
    }
    @media screen and (min-width: 1024px) {
      padding: 98px 47px 0;
    }
    @media screen and (min-width: 1280px) {
      padding: 98px 15px 0;
      max-width: 1170px;
      margin: 0 auto;
    }
  }
  h2{
    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
    }
  }
  img{
    object-fit: contain;
    width: 70%;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      width: 30%;
      float: left;
      margin: 0 34px 55px 0;
    }
    @media screen and (min-width: 1024px) {
      width: 31%;
      margin: 0 32px 55px 0;
      position: relative;
      bottom: 17px;
    }
    @media screen and (min-width: 1280px) {
      width: 26%;
      margin: 0 62px 55px 33px;
      bottom: -5px;
    }
  }
  .text-block{
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }
  h3{
    width: 80%;
    margin: 0 auto;
  }
  .description{
    line-height: 23px;
    width: 90%;
    margin: 10px auto 20px;
    @media screen and (min-width: 768px) {
      width: 97%;
    }
    @media screen and (min-width: 1024px) {
      line-height: 22px;
      margin: 7px auto 23px;
      width: 100%;
    }
  }
  .description:nth-of-type(2) {
    margin: 10px auto 12px;
    @media screen and (min-width: 768px) {
      margin: 10px auto 18px;
    }
    @media screen and (min-width: 1280px) {
      margin: 10px auto 12px;
    }
  }
  a{
    color: #ef6c00;
    font-size: 22px;
    font-weight: 700;
  }
</style>