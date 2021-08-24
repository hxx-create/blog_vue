<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./assets/background.jpg");
  background-position: center top;
  background-size: cover;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media screen and (max-width: 1200px) {
  body,
  html {
    font-size: 15px;
  }
}
@media screen and (max-width: 992px) {
  body,
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 768px) {
  body,
  html {
    font-size: 13px;
  }
}
@media screen and (max-width: 576px) {
  body,
  html {
    font-size: 12px;
  }
}
@media screen and (max-width: 400px) {
  body,
  html {
    font-size: 11px;
  }
}
</style>
