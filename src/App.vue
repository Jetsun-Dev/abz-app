<template>
  <div id="app">
    <Header></Header>
    <Banner></Banner>
    <Aboutme></Aboutme>
    <Relationships></Relationships>
    <Requirments></Requirments>
    <Users></Users>
    <Signup></Signup>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
import Aboutme from './components/Aboutme'
import Relationships from './components/Relationships'
import Requirments from './components/Requirments'
import Users from './components/Users'
import Signup from './components/Signup'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Aboutme,
    Relationships,
    Requirments,
    Users,
    Signup,
    Footer
  }
}
</script>

<style lang="less">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 64px;
}
@import "./less/main.less";

</style>
