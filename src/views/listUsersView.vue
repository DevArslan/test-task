<template>
    <div class="listUsers">
        <usersTable v-bind:users = "users"></usersTable>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import usersTable from '@/components/usersTable.vue';
// @ is an alias to /src
export default {
  name: 'listUsersView',
  components: {
    usersTable,
  },
  data() {
    return {
      users: null,
    };
  },
  methods: {
    idSortFunction(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id >  b.id) {
            return 1;
        }
        return 0;
        },
  },
  mounted() {
    const url = 'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/';
    const token = localStorage.getItem('token');
    fetch(url,{
        headers: {
            Authorization: `Token ${token}`,
        },
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.users = data.sort(this.idSortFunction);
      });
  },
};

</script>


