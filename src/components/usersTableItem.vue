<template>
  <tr>
    <td data-column-name='First name' class="col1">{{item['first_name']}}</td>
    <td data-column-name='id' class="col2">{{item['id']}}</td>
    <td data-column-name='is Active' class="col3">{{item['is_active']}}</td>
    <td data-column-name='is Superuser' class="col4">{{item['is_superuser']}}</td>
    <td data-column-name='last login' class="col5">{{item['last_login']}}</td>
    <td data-column-name='last name' class="col6">{{item['last_name']}}</td>
    <td data-column-name='username' class="col7">{{item['username']}}</td>
  </tr>
</template>

<script>

export default {
    name: 'listUsers',
    props: {
        item: {
        type: Object,
        required: true,
        },
    },
};
</script>
<style lang="scss" scoped>
  
  td{
    text-align: justify ;
    padding:1rem;
    border-bottom: solid 1px #ccc;
    }
  a{
    text-align: justify ;
    padding:10px;
  }
  .col1{
    width: 10%;
  }
  .col2{
    width: 5%;
  }
  .col3{
    width: 6%;
  }
  .col4{
    width: 6%;
  }
  .col5{
    width: 10%;
  }
  .col6{
    width: 10%;
  }
  .col7{
    width: 25%;
  }
  @media screen and (max-width: 1024px) {
  td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 2rem;
    text-align: right;
    padding: 4rem;
    vertical-align: middle;
  }  
  .col1{
    width: auto;
  }
  .col2{
    width: auto;
  }
  .col3{
    width: auto;
  }
  .col4{
    width: auto;
  }
  .col5{
    width: auto;
  }
  .col6{
    width: auto;
  }
  .col7{
    width: auto;
  }
  }
</style>