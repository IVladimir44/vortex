<template>
<div class="background">
  <div class="wrapper">
    <div class="search">
        <form>
        <input type="text" placeholder="Поиск...">
        <button type="submit"></button>
        </form>
    </div>
  </div>
    <div class="wrapper">
      
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
          <li>
            <img class="products_img" src="../../assets/noname.png" alt="product_5"> <p>Объявление_5</p>
          </li>
          <li>
            <img class="products_img" src="../../assets/noname.png" alt="product_6"> <p>Объявление_6</p>
          </li>
          <li>
            <img class="products_img" src="../../assets/noname.png" alt="product_7"> <p>Объявление_7</p>
          </li>
          <li>
            <img class="products_img" src="../../assets/noname.png" alt="product_8"> <p>Объявление_8</p>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>

</script>

<style>
.background {
  background-color: #F2F4F5;
}
.wrapper {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1238px;
}
* {box-sizing: border-box;}
body{margin: 0;}
div {padding: 0px 0}
form {
  position: relative;
  width: 400px;
  margin: 0 auto;
}
.search {
  display: flex;
  justify-content: flex-end;
  background: #FFFF;
  margin-top: 15px;
}
.search input {
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #002F34;
  border-radius: 6px;
  outline: none;
  background: #FFFF;
  color: #002F34;
}
.search button {
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
.search button:before {
  content: "\f002";
  font-family: FontAwesome;
  font-size: 16px;
  color: #FFFF;
}
.products {
  margin: 15px;
}
.products_list {
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    list-style-type: none;
}
.products_list li{
    border: 2px solid #002F34;
    box-shadow: 2px 2px 4px 4px #002F34;
    border-radius: 6px;
    padding: 15px;
    width: 268px;
    height: 348px;
    margin: 15px 0 0 15px;
    background-color: #FFFF;
}
</style>

