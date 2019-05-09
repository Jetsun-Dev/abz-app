<template>
  <div class="requirments" id="requirments">
    <div class="supwrap">
      <h2>{{ title }}</h2>
      <img :src="imgpath" alt="Requirments image" v-if="deviceWidth < 768 || deviceWidth >= 1024">
      <img :src="imgpath2" alt="Requirments image" v-if="deviceWidth >= 768 && deviceWidth < 1024">
      <p>{{ text1 }}</p>
      <p>{{ text2 }}</p>
      <p>{{ text3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Requirments",
  data() {
    return {
      deviceWidth: window.innerWidth,
      title: "General requirements for the test task",
      text1: "Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.",
      text2: "If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.",
      text3: "Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.",
      imgpath: require("../assets/imgs/man-laptop-v1.svg"),
      imgpath2: require("../assets/imgs/man-laptop-v2.svg")

    };
  }
};
</script>

<style scoped lang="less">

.requirments {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/laptop-background-320.jpg);
  width: 100%;
  padding: 65px 0 41px;
  @media screen and (min-width: 768px) {
    padding: 112px 24px 96px;
    background-image: url(../assets/req-bg-768.jpg);
  }
  @media screen and (min-width: 1024px) {
    padding: 132px 47px 96px;
    min-height: 756px;
    background-image: url(../assets/req-bg-1024.jpg);
  }
  @media screen and (min-width: 1280px) {
    padding: 132px 0 96px;
    min-height: 693px;
    background-image: url(../assets/req-bg-1280.jpg);
  }
}
.supwrap{
  @media screen and (min-width: 1280px) {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
}
h2{
  width: 90%;
  margin: 0 auto 24px;
  @media screen and (min-width: 768px) {
    width: 61%;
    margin: 0 auto 35px;
  }
  @media screen and (min-width: 1024px) {
    width: 85%;
    margin: 0 auto 39px;
  }
}
p {
  line-height: 23px;
  width: 90%;
  margin: 20px auto;
  @media screen and (min-width: 768px) {
    width: 47%;
    text-align: left;
    margin: 20px 0;
  }
  @media screen and (min-width: 1280px) {
    width: 48%;
  }
}
h2, p{
  color: #fff;
}
img {
  object-fit: contain;
  width: 79%;
  @media screen and (min-width: 768px) {
    width: 48%;
    float: right;
  }
  @media screen and (min-width: 1024px) {
    width: 46%;
    position: relative;
    top: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 38%;
    top: 4px;
    right: 58px;
  }
}
</style>