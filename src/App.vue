<template>
  <div id="app">
    <navigation v-if="isAuthenticated"></navigation>
    <div class="content">
      <router-view />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from '@/components/navigation.vue';
export default {
  components: {
    navigation,
  },
  data() {
    return {
      isAuthenticated: localStorage.getItem('token'),
    };
  },
  beforeUpdate(){
    this.isAuthenticated = localStorage.getItem('token')
  }

};
</script>

<style lang="scss">
.content{
  margin-top:2%;
  font-size: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  background-color: #6F8CA8;
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  padding: 0;
  margin:0;
}
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
html{
  font-size: 1vw;
}

</style>
