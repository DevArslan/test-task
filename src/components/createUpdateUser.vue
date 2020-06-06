
<template>
  <div class="createUpdateUser">
    <form action method="post" class="createUpdateUserForm">
      <ul>
        <li>
          <label for="id">ID</label>
          <input type="text" placeholder="" v-model="id" name="id" />
        </li>
        <li>
          <label for="firstName">First name</label>
          <input type="text" placeholder="" v-model="firstName" name="firstName" />
        </li>
        <li>
          <label for="lastNname">Last name</label>
          <input type="text" v-model="lastName" name="lastNname" />
        </li>
        <li>
          <label for="username">Username</label>
          <input type="text" v-model="username" name="username" />
        </li>
        <li>
          <label for="password">Password</label>
          <input type="password" v-model="password" name="password" />
        </li>
        <li>
          <label for="isActive">Активность</label>
          <input type="checkbox" v-model="isActive" name="isActive" />
        </li>
        <li>
          <label for="lastLogin">Последняя авторизация</label>
          <input type="date" v-model="lastLogin" name="lastLogin" />
        </li>
        <li>
          <label for="superUser">Super user</label>
          <input type="checkbox" v-model="superUser" name="superUser" />
        </li>
        <button class="regButton" @click.prevent="registerUser">Регистрировать</button>
        <button class="updateButton" @click.prevent="updateUser">Изменить</button>
      </ul>
    </form>
  </div>
</template>



<style lang="scss" scoped>
    .createUpdateUser{
        margin: 0 auto;
        width: 15%;
        color: white;
        -webkit-box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        box-shadow: 0px -1px 11px 0px rgba(0,0,0,0.75);
        display: flex;
        justify-content: space-around;
        align-items: center;
        ul{
            padding: 0;
            margin: 0;
            button{
                padding-bottom: 1px;
                border: 1px solid #67DFD4;
                border-radius: 3px;
                padding: 5px 10px;
            }
            li{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                label{
                    width: 100%;
                    display: block;
                }
                input{
                    width: 100%;
                }
            }
        }
    }
</style>

<script>

export default {
    name: 'createUpdateUser',
    data() {
    return {
      id: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      isActive: '',
      lastLogin: '',
      superUser: '',
    };
  },
  methods: {
      registerUser() {

        var passwordUpperCasePres = false;
        const passwordLength = this.password.length;
        const passwordNumberPres = /[0-9]/.test(this.password);
        const passwordLatPres = /[a-zA-Z]/.test(this.password);

        for(let i = 0; i < passwordLength; i++){
            if(this.password[i] === this.password[i].toUpperCase() && /[0-9]/.test(parseInt(this.password[i])) === false){
                console.log('sbs')
                passwordUpperCasePres = true;
            }
        }

        if (this.username && this.password && this.isActive && passwordLength>7 && passwordUpperCasePres == true && passwordNumberPres == true && passwordLatPres == true) {
            const url = 'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/'
            const token = localStorage.getItem('token');
            const data = {
                id: this.id,
                username: this.username,
                first_name: this.firstName,
                last_name: this.lastName,
                password: this.password,
                is_active: this.isActive,
                last_login: this.lastLogin,
                is_superuser: this.superUser,
            };
            console.log(data)
            fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
                },
                body: JSON.stringify(data),
            });
        }
        if (!this.username) {
            alert('Требуется указать имя');
        }
        if (!this.password) {
            alert('Требуется указать пароль');
        }
        if (!this.isActive) {
            alert('Требуется указать active');
        }
        if(passwordNumberPres == false){
            alert('Ваш пароль должен содержать цифры');
        }
        if(passwordUpperCasePres == false){
            alert('Ваш пароль должен заглавные латинские буквы');
        }
        if(passwordLength < 8){
            alert('Ваш пароль должен содержать не менее 8 символов');
        }
        if(passwordLatPres == false){
            alert('Ваш пароль должен содержать латинские буквы')
        }
    },
    updateUser() {
        console.log(this.password)
        var passwordUpperCasePres = false;
        const passwordLength = this.password.length;
        const passwordNumberPres = /[0-9]/.test(this.password);
        const passwordLatPres = /[a-zA-Z]/.test(this.password);

        for(let i = 0; i < passwordLength; i++){
            if(this.password[i] === this.password[i].toUpperCase() && /[0-9]/.test(parseInt(this.password[i])) === false){
                console.log('sbs')
                passwordUpperCasePres = true;
            }
        }
        
        console.log(passwordLength)
        if (this.username && this.password && this.isActive && passwordLength>7 && passwordUpperCasePres == true && passwordNumberPres == true && passwordLatPres == true) {
            const url = 'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/'+this.id+'/'
            const token = localStorage.getItem('token');
            const data = {
                username: this.username,
                first_name: this.firstName,
                last_name: this.lastName,
                password: this.password,
                is_active: this.isActive,
                last_login: this.lastLogin,
                is_superuser: this.superUser,
            };
            console.log(data)
            fetch(url, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
                },
                body: JSON.stringify(data),
            });
        }
        if (!this.username) {
            alert('Требуется указать имя');
        }
        if (!this.password) {
            alert('Требуется указать пароль');
        }
        if (!this.isActive) {
            alert('Требуется указать active');
        }
        if(passwordNumberPres == false){
            alert('Ваш пароль должен содержать цифры');
        }
        if(passwordUpperCasePres == false){
            alert('Ваш пароль должен заглавные латинские буквы');
        }
        if(passwordLength < 8){
            alert('Ваш пароль должен содержать не менее 8 символов');
        }
        if(passwordLatPres == false){
            alert('Ваш пароль должен содержать латинские буквы')
        }

    }
  }
};

</script>
