<template>
  <div id="app">
    <authForm></authForm>
  </div>
</template>

<script>

import authForm from './components/authForm.vue'

export default {
  name: 'App',
  components: {
    authForm,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #2c3e50;
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
}
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
</style>
