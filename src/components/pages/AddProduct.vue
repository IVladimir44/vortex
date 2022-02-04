<template>
<div class="background">
        <div class="title_wrapper">
            <p class="add_title">Создать объявление</p>
        </div>
        <div class="wrapper">
            <div class="name_category">
                <p class="details">Опишите в подробностях</p>
                <label class="name" for="name">Укажите название*</label>
                <input class="name_field" id="name" type="text" placeholder="Например, Iphone X" v-model="productName" required />
                <div class="category">
                    <label for="category">Категория*</label>
                </div>
                    <select class="category_field" id="category" v-model="category">
                        <option 
                        v-for="(category, index) in categories"
                        :value="category.value"
                        :key="index"
                        >
                            {{category.label}}
                        </option>
                    </select>
            </div>
        </div>
    <div class="wrapper">
        <div class="photo_wrapper">
            <p class="photo_title">Фото</p>
            <p class="photo_subtitle">Первое фото будет на обложке объявления. Перетащите, чтобы изменить порядок.</p>
            <div class="photos">
                <ul class="photos_list">
                    <li class="photo">
                        Добавить фото
                        <input class="add_photo" type="file" accept="image/heic, image/png, image/jpeg, image/webp">
                    </li>
                    <li class="photo_2">

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
                <!-- <ul class="photos_list">
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_1">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_2">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_3">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_4">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_5">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_6">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_7">
                    </li>
                    <li>
                        <img class="photo_img" src="../../assets/noname.png" alt="photo_8">
                    </li>
                </ul> -->
            </div>
        </div>        
    </div>
    <div class="wrapper">
        <div class="description">
            <p class="description_title">Описание*</p>
            <textarea class="description_field" name="" placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание" cols="30" rows="10" v-model="description" required ></textarea>
        </div>
    </div>
    <div class="wrapper">
        <div class="contacts">
            <p class="contacts_title">Контактная информация</p>
            <p class="contacts_location">Местоположение*</p>
            <input class="location_field" type="text" placeholder="" v-model="location" required />
            <p class="contacts_Email">Email-адрес</p>
            <input class="Email_field" type="text" placeholder="" v-model="email" required />
            <p class="contacts_phone">Номер телефона</p>
            <input class="phone_field" type="text" placeholder="" v-model="phone" />
        </div>
    </div>
    <div class="convention">
        <input type="checkbox" id="box-1" v-model="agreeWithSendCommerce">
        <label for="box-1">Я согласен и даю согласие на получение коммерческих и маркетинговых сообщений (например, информационного бюллетеня, SMS) от vortex Group, связанных с ними организаций и их деловых партнеров посредством электронной связи и телекоммуникаций на мое устройство.</label>
    </div>
    <div class="wrapper">
        <div class="posting_buttons">
            <span class="preview"><i class="preview_link">Предосмотр</i></span>
            <button type="submit" class="send">Опубликовать</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            productName: '',
            description: '',
            location: '',
            email: '',
            phone: '',
            category: 'Electronics',
            agreeWithSendCommerce: false,
            categories: [
                {
                    label: 'Электроника',
                    value: 'Electronics'
                },
                {
                    label: 'Недвижимость',
                    value: 'House'
                },
                {
                    label: 'Мода и стиль',
                    value: 'Fashion&Style'
                },
                {
                    label: 'Авто',
                    value: 'Car'
                },
            ]
        }
    }
}
</script>

<style scoped>
.background {
    background-color: #f2f4f5;
    padding-bottom: 48px;
}
.add_title {
  display: flex;
  text-align: start;
  font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    color: rgb(0, 47, 52);
    margin: 0 0 30px 142px;
    padding-top: 48px ;
}
.wrapper {
  display: flex;
  align-items: center;
  max-width: 1206px;
  margin: 0 auto;
  background-color: #ffff;
  border-radius: 6px;
  margin-bottom: 10px;
}
.name_category {
    display: block;
    text-align: start;
    padding: 32px;
}
.details {
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    color: rgb(0, 47, 52);
    margin: 0px 0px 16px;
}
.name {
    margin: 0px;
    padding: 0px 0px 8px;
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    color: rgb(0, 47, 52);
}
.name_field {
    width: 682px;
    height: 60px;
    background: #F2F4F5;
    text-shadow: none;
    border: 2px solid #F2F4F5;
    border-radius: 6px;
    font-family: sans-serif;
    text-size-adjust: 100%;
}
.category {
    line-height: 20px;
    font-size: 14px;
    color: rgb(0, 47, 52);
    margin: 8px 0px;
}
.category_field {
    width: 682px;
    height: 60px;
    background: #F2F4F5;
    text-shadow: none;
    border: 2px solid #F2F4F5;
    border-radius: 6px;
    font-family: sans-serif;
    text-size-adjust: 100%;
    padding: 15px;
}
.photo_wrapper {
    padding: 32px;
}
.photo_title {
    display: flex;
    text-align: start;
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    color: rgb(0, 47, 52);
    margin: 0px 0px 8px;
}
.photo_subtitle {
    display: flex;
    text-align: start;
    font-size: 12px;
    line-height: 14px;
    color: rgb(127, 151, 153);
    margin: 0px 0px 16px;
}
.photos {
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    gap: 16px;
}
.photos_list {
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.photos_list li{
    border-radius: 4px;
    width: auto;
    height: 140px;
    padding: 0;
    display: flex;
}
.photo {
    border-radius: 4px;
    background: rgb(200, 248, 246);
    width: 160px;
    height: 120px;
    padding: 0px 20px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.add_photo {
    position: absolute;
    opacity: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    top: 0px;
    cursor: pointer;
}
.photo_2 {
    border-radius: 4px;
    background: rgb(242, 244, 245);
    width: 159px;
    height: 120px;
    padding: 0px 20px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.description {
    padding: 32px;
}
.description_title {
    display: flex;
    text-align: start;
    margin: 0px;
    padding: 0px 0px 8px;
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    color: rgb(0, 47, 52);
}
.description_field {
    background-clip: padding-box;
    background-color: rgb(242, 244, 245);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(242, 244, 245);
    border-image: initial;
    border-radius: 6px;
    color: rgb(0, 47, 52);
    box-shadow: none;
    font-size: 16px;
    line-height: 20px;
    outline: 0px;
    padding: 16px 48px 0px 16px;
    resize: none;
    width: 100%;
    font-family: sans-serif;
    text-size-adjust: 100%;
    width: 680px;
    height: 260px;
}
.contacts {
    display: block;
    text-align: start;
    padding: 32px;
}
.contacts_title {
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    color: rgb(0, 47, 52);
    margin: 0;
}
.contacts_location {
line-height: 20px;
    font-size: 14px;
    color: rgb(0, 47, 52);
    margin: 16px 0px;
}
.location_field {
    width: 370px;
    height: 50px;
    background: #F2F4F5;
    text-shadow: none;
    border: 2px solid #F2F4F5;
    border-radius: 6px;
    font-family: sans-serif;
    text-size-adjust: 100%;
    margin-bottom: 16px;
}
.contacts_Email {
    line-height: 20px;
    font-size: 14px;
    color: rgb(0, 47, 52);
    margin: 8px 0px;
}
.Email_field {
    width: 370px;
    height: 50px;
    background: #F2F4F5;
    text-shadow: none;
    border: 2px solid #F2F4F5;
    border-radius: 6px;
    font-family: sans-serif;
    text-size-adjust: 100%;
    margin-bottom: 16px;
}
.contacts_phone {
    line-height: 20px;
    font-size: 14px;
    color: rgb(0, 47, 52);
    margin: 8px 0px;
}
.phone_field {
        width: 370px;
    height: 50px;
    background: #F2F4F5;
    text-shadow: none;
    border: 2px solid #F2F4F5;
    border-radius: 6px;
    font-family: sans-serif;
    text-size-adjust: 100%;
}
.convention {
    display: flex;
  align-items: center;
  max-width: 1206px;
  margin: 32px auto 32px auto;
}
input[type="checkbox"] { display: none; }

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px 'Open Sans', Arial, sans-serif;
  color: rgb(0, 47, 52);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child { margin-bottom: 0; }

input[type="checkbox"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #002F34;
  border-radius: 2px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.posting_buttons {
    margin-bottom: 0;
    padding: 32px;
}
.preview {
    margin-right: 48px;
}
.send {
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px; min-height: 40px;
    position: relative;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    background-color: rgb(0, 47, 52);
    border: 5px
    solid rgb(0, 47, 52);
    border-radius: 6px;
    color: rgb(255, 255, 255);
    padding: 10px 30px 8px;
    width: auto;
}
input[type="text"]{padding: 15px;}
</style>