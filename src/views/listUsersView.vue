<template>
  <div class="listUsers">
    <div class="sortByID" @click="sortByID()">
      <p>Сортировать по id</p>
      <i class="sortIdIcon" :class="{reverseID: reverse}"></i>
    </div>
    <usersTable v-bind:users="users"></usersTable>
  </div>
</template>

<style lang="scss" scoped>
.sortByID {
  background-color: #2c3e50;
  margin: 0 auto;
  width: 10%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #67dfd4;
  border-radius: 3px;
  p {
    color: white;
  }

  .sortIdIcon {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-image: url("../assets/icons/sort-24px.svg");
  }
  .reverseID {
    // transform: rotate(-180deg);
    transform: scaleY(-1);
  }
}
@media screen and (max-width: 1024px) {
  .sortByID {
    font-size: 4rem;
    width: 40%;
    .sortIdIcon {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>

<script>
import usersTable from "@/components/usersTable.vue";
// @ is an alias to /src
export default {
  name: "listUsersView",
  components: {
    usersTable
  },
  data() {
    return {
      users: null,
      reverse: false
    };
  },
  methods: {
    idSortFunction(a, b) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }

      console.log(this.reverse);
      return 0;
    },
    reverseIdSortFunction(a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }

      console.log(this.reverse);
      return 0;
    },
    sortByID() {
      if (this.reverse === true) {
        this.users = this.users.sort(this.idSortFunction);
        this.reverse = false;
      } else {
        this.users = this.users.sort(this.reverseIdSortFunction);
        this.reverse = true;
      }
    }
  },
  mounted() {
    const url = "http://emphasoft-test-assignment.herokuapp.com/api/v1/users/";
    const token = localStorage.getItem("token");
    fetch(url, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.users = data.sort(this.idSortFunction);
      });
  }
};
</script>


