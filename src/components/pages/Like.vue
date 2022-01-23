<template>
<div class="background">
    <div class="title_wrapper">
        <p class="like_title">Избранные объявления</p>
        <div class="like_link-button">
            <a class="like_link-delete" href="#"><span class="like_span">Очистить избранные</span></a>
        </div>
    </div>
    <div class="liked_wrapper">
        <div class="liked">
            <ul class="liked_list">
                <li>
                    <img class="products_img" src="../../assets/noname.png" alt="liked_1"> <p>Избранное_1</p>
                </li>
                <li>
                    <img class="products_img" src="../../assets/noname.png" alt="liked_2"> <p>Избранное_2</p>
                </li>
                <li>
                    <img class="products_img" src="../../assets/noname.png" alt="liked_3"> <p>Избранное_3</p>
                </li>
                <li>
                    <img class="products_img" src="../../assets/noname.png" alt="liked_4"> <p>Избранное_4</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
.background {
    background-color: #F2F4F5;
}
.title_wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1238px;
    background-color: #FFFF;
    border-radius: 6px;
}
.liked_wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1238px;
}
.like_title {
    padding-top: 55px;
    padding-bottom: 30px;
    margin-left: 46px;
    font-size: 32px;
    font-weight: 500;
    line-height: 1;
    color: #002f34;
}
.like_link-button {
    padding-top: 14px;
    margin-left: 85px;
}
a {
    outline: none;
    color: #002f34;
    text-decoration: none;
}
.like_span {
    border-radius: 4px;
    display: inline-block;
    font-size: 14px !important;
    font-weight: 600;
    line-height: 1.29;
    padding: 8px 23px;
    border: 2px solid #002f34;
}
.liked {
    margin: 15px;
}
.liked_list {
    display: flex;
    list-style-type: none;
    margin-bottom: 40px;

}
.liked_list li{
    background-color: #FFFF;
    border: 2px solid #002F34 ;
    box-shadow: 2px 2px 4px 4px #002F34;
    border-radius: 6px;
    padding: 15px;
    widows: 268px;
    height: 348px;
    margin: 15px 0 0 15px;
}
</style>