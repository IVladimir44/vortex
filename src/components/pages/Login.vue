<template>
    <!-- <div class="background">
        <div class="row">
            <div class="col-md-6 login-form">
                <h3>Вход</h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Укажите ваш email или номер телефона*" value="" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Введите свой пароль*" value="" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Войти" />
                    </div>
                    <div class="form-group">
                        <a href="#" class="ForgetPwd">Забыли пароль?</a>
                    </div>
                </form>
            </div>
        </div>
    </div> -->
    <div class="login">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model.trim="email">
    <div id="emailHelp" class="form-text">Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input required type="password" class="form-control" id="exampleInputPassword1" v-model.trim="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agreeWithSendEmail">
    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
  </div>
<div class="wrapper_form-check">
  <div class="form-check">
  <input class="form-check-input" type="radio" value="male" name="flexRadioDefault" id="flexRadioDefault1" v-model="gendere">
  <label class="form-check-label" for="flexRadioDefault1">
    Мужчина
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="female" name="flexRadioDefault" id="flexRadioDefault2" v-model="gendere" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Женщина
  </label>
</div>
</div>
  <button @click.prevent="login" class="btn btn-primary">Войти</button>
</form>
    </div>
</template>

<script>
export default {
    name: "myLogin",
    data() {
        return {
            email: '',
            password: '',
            agreeWithSendEmail: false,
            gendere:'male',
        }
    },
    methods: {
        login() {
            this.$store.dispatch('user/login', { email: this.email, password: this.password }).then((result) => {
                console.log('login result', result)
            })
        }
    }
};
</script>

<style scoped>
/* .background {
    background-color: #F2F4F5
}
.row {
    display: flex;
    justify-content: center;
    margin: 0;
}
.login-form {
    margin: 88px 0 87px 0;
    border: 2px solid #002F34;
    border-radius: 6px;
    padding: 4%;
    background-color: #FFFF;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.2);
}
.login-form h3 {
    text-align: center;
    margin: 0 0 40px 0 ;
    color: #333;
}

.btnSubmit {
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
    margin: 15px 0 15px 0;
}
.login-form .btnSubmit {
    font-weight: 600;
    color: #fff;
    background-color: #002F34;
}
.login-form .ForgetPwd {
    color: #002F34;
    font-weight: 600;
    text-decoration: none;
}
.form-control {
    margin: 30px;
}
.form-control {
    width: 370px;
    height: 50px;
    background: #F2F4F5;
    text-shadow: none;
    border: 2px solid #F2F4F5;
    border-radius: 6px;
    font-family: sans-serif;
    text-size-adjust: 100%;
} */
.login {
    margin: 50px;
}
.form-chek-label {
    display: flex;
}
.wrapper_form-check {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}
</style>