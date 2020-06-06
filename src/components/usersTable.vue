<template>
    <div class="wrapper">
      <div class="search">
        <ul>
          <li>
            <label for="username">Имя пользователя:</label>
            <input name="username" class="search-username" type="text" v-model="username" >
          </li>
        </ul>
      </div>
      <div class="usersTable">
        <table border="1">
          <thead>
            <tr>
              <th>First name</th>
              <th>id</th>
              <th>is Active</th>
              <th>is Superuser</th>
              <th>last login</th>
              <th>last name</th>
              <th>username</th>
            </tr>
          </thead>
          <usersTableItem v-for="item of filteredList" v-bind:item="item" v-bind:key="item.id "/>
        </table>
    </div>
  </div>

</template>

<style lang="scss">
    .search{
      color:white;
      ul{
        list-style: none;
        li{
          input{
            margin-left: 1%;
          }
        }
      }
    }
    .usersTable{
      width:100%;
      table{
        color: white;
        width: 100%;
      }
    }
</style>

<script>
import usersTableItem from '@/components/usersTableItem.vue';

export default {
  props: ['users'],
  name: 'usersTable',
  components: {
    usersTableItem,
  },
  data() {
    return {
      username:'',
    };
  },
  computed: {
    filteredList() {
      const tempUserName = this.username.toUpperCase();
      console.log(tempUserName)
      try {
        const filteredData = this.users.filter(function(usersItem){
          if(tempUserName==='') return true;
          else{
            try {
              return usersItem.first_name.toUpperCase().indexOf(tempUserName) > -1;
            } catch (error) {
              console.log('error')
            }
          }
        })
       console.log(filteredData);
       return(filteredData);
      } catch (err) {
        return err;
      }
    }
  },
}
</script>