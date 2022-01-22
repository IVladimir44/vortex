<template>

<header-comp></header-comp>

  <router-view></router-view>

<footer-comp></footer-comp>

</template>

<script>
import HeaderComp from './components/layout/Header.vue'
import FooterComp from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  }
}
</script>



<style>
#app {
  font-family: Geomanist, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
}
*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
    font-family: inherit;
}
input::-ms-clear {
    display: none;
}
button,
a {
    cursor: pointer;
}
button::-moz-focus-inner {
    padding: 0;
    border: 0;
}
a,
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
ul li {
    list-style: none;
}
img {
    vertical-align: top;
}
}
</style>
