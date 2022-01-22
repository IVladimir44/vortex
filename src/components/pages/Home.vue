<template>
<div class="d1">
  <form>
  <input type="text" placeholder="Поиск...">
  <button type="submit"></button>
  </form>
</div>
<div class="products">
<ul class="products_list">
    <li>
        <img class="products_img" src="../../assets/noname.png" alt="product_1"> <p>Объявление_1</p>
    </li>
    <li>
        <img class="products_img" src="../../assets/noname.png" alt="product_2"> <p>Объявление_2</p>
    </li>
    <li>
        <img class="products_img" src="../../assets/noname.png" alt="product_3"> <p>Объявление_3</p>
    </li>
    <li>
        <img class="products_img" src="../../assets/noname.png" alt="product_4"> <p>Объявление_4</p>
    </li>
</ul>
</div>
</template>

<script>

</script>

<style>
* {box-sizing: border-box;}
body{margin: 0;}
div {padding: 0px 0}
form {
  position: relative;
  width: 400px;
  margin: 0 auto;
}
.d1 {background: #FFFF;}
.d1 input {
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #002F34;
  border-radius: 6px;
  outline: none;
  background: #FFFF;
  color: #002F34;
}
.d1 button {
  position: absolute; 
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  border: none;
  background: #002F34;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.d1 button:before {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 16px;
  color: #FFFF;
}
.products_list {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
}
.products_list li{
    border: 2px solid #002F34 ;
    border-radius: 6px;
    padding: 15px;
}
</style>

