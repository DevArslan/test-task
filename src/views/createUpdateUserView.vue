<template>
  <div class="createUpdateUserView">
    <createUpdateUser ></createUpdateUser>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import createUpdateUser from '@/components/createUpdateUser.vue';
// @ is an alias to /src
export default {
  name: 'createUpdateUserView',
  components: {
    createUpdateUser,
  },
};

</script>
