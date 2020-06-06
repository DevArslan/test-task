<template>
  <div class="authView">
    <authForm ></authForm>
  </div>
</template>

<style lang="scss" scoped>
    .authView{
        margin-top: 15%;
    }
  .login{
    display: flex;
    justify-content: center;
  }
</style>

<script>
import authForm from '@/components/authForm.vue';
// @ is an alias to /src
export default {
  name: 'login',
  components: {
    authForm,
  },
};

</script>
