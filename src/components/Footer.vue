<template>
  <footer>
    <div class="supwrap">
      <div class="footer-top">
        <img class="footer__logo" src="../assets/icons/footer-logo.png" alt="abz-agency logo">
        <ul class="footer__menu">
          <li v-for="(value, key) in footerMenu" :key="key"><a :href="value">{{ key }}</a></li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="footer-middle">
        <div class="footer__block-contacts">
          <ul class="footer__block-contacts__ul">
            <li v-for="(value, key) in footerContacts" :key="key">{{ value }}</li>
          </ul>
        </div>
        <div class="footer__block-refs" v-if="deviceWidth >= 768">
          <ul class="footer__column" v-for="(column, index) in footerRefs" :key="index">
            <li v-for="(value, key) in footerRefs[index]" :key="key"><a :href="value">{{ key }}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="footer__social">
          <li v-for="(value, index) in footerSocial" :key="index" class="footer__social__li"><a :href="value.link"><img :src="value.img" class="social-img"></a></li>
        </ul>
        <div class="footer_copyrights">© abz.agency specially for the test task</div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
      footerContacts: { 'Email': 'work.of.future@gmail.com', 'tel1': '+38 (050) 789 24 98', 'tel2': '+38 (095) 556 08 45'},
      footerRefs: [
        { 'News': '#', 'Blog': '#', 'Pertners': '#', 'Shop': '#'},
        { 'Overview': '#', 'Design': '#', 'Code': '#', 'Collaborate': '#'},
        { 'Tutorials': '#', 'Resources': '#', 'Guides': '#', 'Examples': '#'},
        { 'FAQ': '#', 'Terms': '#', 'Conditions': '#', 'Help': '#'}
      ],
      footerSocial: [
        {name: 'Facebook', link: '#', img: require('../assets/icons/facebook.svg')},
        {name: 'LinkedIn', link: '#', img: require('../assets/icons/linkedin.svg')},
        {name: 'Instagram', link: '#', img: require('../assets/icons/instagram.svg')},
        {name: 'Twitter', link: '#', img: require('../assets/icons/twitter.svg')},
        {name: 'Pinterest', link: '#', img: require('../assets/icons/pinterest.svg')}
      ],
      deviceWidth: window.innerWidth
    };
  },
  computed: {
    footerMenu() {
      return this.$store.state.mainMenu
    }
  },
};
</script>

<style scoped lang="less">
  footer{
    background: #2b3191;
    color: #fff;
    padding: 30px 0;
    overflow: hidden;
    width: 100%;
    @media screen and (min-width: 768px) {
      padding: 0 24px 20px;
    }
    @media screen and (min-width: 1024px) {
      padding: 0 47px 20px;
    }
    @media screen and (min-width: 1280px) {
      padding: 0 0 20px;
    }
  }
  .supwrap{
    @media screen and (min-width: 1280px) {
      max-width: 1170px;
      margin: 0 auto;
      padding: 0 15px;
    }
  }
  .footer-top{
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 86px;
    }
    @media screen and (min-width: 1024px) {
      height: 85px;
    }
  }
  a{
    color: #fff;
  }
  .line{
    width: 100%;
    height: 1px;
    background-color: #605cc1;
    position: relative;
    @media screen and (min-width: 768px) {
      width: 150%;
      right: 10%;
    }
    @media screen and (min-width: 1280px) {
      width: 100%;
      right: 0;
    }
  }
  .footer__menu{
    margin: 9px 0 29px;
    line-height: 26px;
    @media screen and (min-width: 768px) {
      margin: 0;
    }
    a{
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
    }
    li{
    @media screen and (min-width: 768px) {
      display: inline-block;
      margin-left: 30px;
    }
    }
  }
  .footer-middle{
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 20px;
    }
  }
  .footer__block-contacts__ul{
    font-size: 18px;
    line-height: 34px;
    font-family: 'Source Sans Pro', sans-serif;
    @media screen and (min-width: 768px) {
      line-height: 44px;
      text-align: left;
    }
  }
  .footer__block-refs{
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 59.3%;
    }
    @media screen and (min-width: 1024px) {
      width: 57.5%;
    }
    @media screen and (min-width: 1024px) {
      width: 56%;
    }
  }
  .footer__column{
    display: inline-block;
    font-size: 16px;
    line-height: 30px;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: right;
  }
  .footer__block-contacts{
    margin-top: 21px;
    @media screen and (min-width: 768px) {
      margin: 0;
      position: relative;
      bottom: 5px;
    }
    @media screen and (min-width: 1024px) {
      li{
        position: relative;
        padding-left: 35px;
        font-size: 20px;
      }
      li::before{
        content: '';
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        width: 26px;
        height: 26px;
        left: 0;
        top: 13px;
      }
      li:first-of-type::before{
        background-image: url(../assets/icons/mail.svg);
      }
      li:nth-of-type(2)::before{
        background-image: url(../assets/icons/phone.svg);
        height: 20px;
        left: 4px;
      }
      li:nth-of-type(3)::before{
        background-image: url(../assets/icons/cellphone.svg);
        top: 9px;
        left: 6px;
      }
    }
  }
  .footer-bottom{
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
    }
    @media screen and (min-width: 1024px) {
      padding-top: 12px;
    }
  }
  .social-img{
    width: 26px;
    height: 26px;
  }
  .footer__social{
    margin-top: 13px;
    @media screen and (min-width: 768px) {
      margin: 0;
      order: 2;
      position: relative;
      left: 10px;
    }
  }
  .footer__social__li{
    display: inline-block;
    margin: 10px;
  }
  .footer_copyrights{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: 2px;
    @media screen and (min-width: 768px) {
      margin: 0;
      order: 1;
    }
  }
</style>