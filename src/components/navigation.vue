<template>
    <div class="navigation">
        <div class="navigation-listOfUsers">
            <router-link to="/list/">
                <p>Список пользователей</p>
            </router-link>
        </div>
        <div class="navigation-createUpdateUsers">
            <router-link to="/createUser/">
                <p>Создать/редактировать пользователя</p>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
    .navigation{
        width:100%;
        height: 4vw;
        -webkit-box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        p{
            color: white;
        }
    }
    @media screen and (max-width: 1024px) {
        .navigation{
            font-size: 3rem;
            height: 10vw;
        }
    }
</style>

<script>

export default {
  name: 'navigation',
};

</script>