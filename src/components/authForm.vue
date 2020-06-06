<template>
    
    <div class="authForm">

        <form @submit.prevent="auth" method="post">
            <ul>
                <li>
                    <label for="login">Login</label>
                    <input type="text" placeholder="" v-model="login" name="login" />
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password" />
                </li>
                <li>
                    <input type="submit" value="Sign In" class="authButton" >
                </li>            
            </ul>
        </form>

    </div>

</template>


<script>
export default {
    name: 'authForm',
    data() {
        return {
            login: '',
            password: '',
        };
    },
    methods: {
        auth () {
            if (this.login && this.password) {

                const url = 'http://emphasoft-test-assignment.herokuapp.com/api-token-auth/'

                const data = {
                    username: this.login,
                    password: this.password,
                }

                fetch(url, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(data),
                    })
                    .then(res => res.json())
                    .then(data => localStorage.setItem('token',data.token))
                    .then(()=>{
                        const auth_token = localStorage.getItem('token')
                        if(auth_token){
                            this.$router.push('/list/')
                        }else{
                            alert('Пароль или логин введены неверно')
                        }
                    })
                    
                    
                    
            }
            if (!this.login) {
                alert('Требуется указать имя');
            }
            if (!this.password) {
                alert('Требуется указать пароль');
            }
        }
    }
}
</script>

<style lang="scss">
    .authForm{
        -webkit-box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        width: 15%;
        margin:0 auto;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        form{
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width:80%;
            ul{
                list-style: none;
                padding: 0px;
                li{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-top: 10%;
                    label{
                        display: block;
                        text-transform: uppercase;
                        font-size: 0.8rem;
                    }
                    input{
                        width: 90%;
                    }
                    .authButton{
                        padding-bottom: 1px;
                        border: 1px solid #67DFD4;
                        border-radius: 3px;
                        padding: 5px 10px;
                    }
                }
            }
            
        }
    }
    @media screen and (max-width: 1024px) {
        .authForm{
            width: 90%;
            height: 100vw;
            ul{
                width:90%;
                margin: 0 auto;
            }
            label{
                font-size:4rem !important;
            }
            input{
                width:100% !important;
                font-size:6rem;
                padding:1rem;
            }
        }
        
    }
</style>