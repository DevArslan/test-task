<template>
  <tr>
    <td>{{item['first_name']}}</td>
    <td>{{item['id']}}</td>
    <td>{{item['is_active']}}</td>
    <td>{{item['is_superuser']}}</td>
    <td>{{item['last_login']}}</td>
    <td>{{item['last_name']}}</td>
    <td>{{item['username']}}</td>
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
    padding:10px;
    }
  a{
    text-align: justify ;
    padding:10px;
  }
</style>