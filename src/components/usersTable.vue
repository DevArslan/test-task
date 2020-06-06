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
        <table >
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
        border: solid 1px #ccc;
        word-break: break-all;
        color: white;
        border-collapse: collapse; 
        display: block;
        width: 100%;
        table-layout: fixed;
        th{
          border-bottom: solid 1px #ccc;
        }
      }
    }


    @media screen and (max-width: 1024px) {
      .search{
        font-size: 4rem;
        // position: fixed;
        
        ul{
          li{
            display: flex;
            align-items: center;
            input{
              padding: 1.2rem;
              font-size: 3rem;
            }
          }
        }
        
      }
      table {
        border: 0;
      }

      table caption {
        font-size: 1.3em;
      }
      
      table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
      
      table tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
      }
      
      table td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right;
      }
      
      table td::before {
        /*
        * aria-label has no advantage, it won't be read inside a table
        content: attr(aria-label);
        */
        content: attr(data-column-name);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      table td:last-child {
        border-bottom: 0;
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