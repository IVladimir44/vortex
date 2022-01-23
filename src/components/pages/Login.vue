<template>
    <div class="background">
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
    </div>
</template>

<script>

</script>

<style scoped>
.background {
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
}
</style>