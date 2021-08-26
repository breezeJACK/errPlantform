<template>
  <div id="app">
    <Geterr msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Geterr from "./components/Geterr.vue";

export default {
  name: "App",
  components: {
    Geterr,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
