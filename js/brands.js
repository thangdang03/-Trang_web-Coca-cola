
var navbar = document.getElementById("navbar");
var menu = document.getElementById("list_menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

/////////////////////////////////////////////////////

var listImg_2 = [   
    '../../img/brands.img/all/7.png',
    '../../img/brands.img/all/8.png',
    '../../img/brands.img/all/9.png',
    '../../img/brands.img/all/10.png',
    '../../img/brands.img/all/11.png',
    '../../img/brands.img/all/12.png'
]
for(var i = 0 ; i <  listImg_2.length  ; i++ ){
    var text_2 =  "<div class='card_img'>  <img src= "+ listImg_2[i] + ">"
 {
       document.getElementById("myIMG-2").innerHTML += text_2;
    }
}

////////////////////////////////////////////////////////////////////////////////////////   
var listImg_3 = [
    '../../img/brands.img/all/16.png',  
    '../../img/brands.img/all/15.png',
    '../../img/brands.img/all/14.png',
    '../../img/brands.img/all/13.png'
]
for(var i = 0 ; i <  listImg_3.length  ; i++ ){
    var text_3 =  "<div class='card_img'>  <img src= "+ listImg_3[i] + ">"
        {
       document.getElementById("myIMG-3").innerHTML += text_3;
    }
}

////////////////////////////////////////////////////////////////////////////////////////
var listImg_4 = [
    '../../img/brands.img/all/17.png',  
    '../../img/brands.img/all/18.png',
    '../../img/brands.img/all/19.png',
    '../../img/brands.img/all/20.png',
    '../../img/brands.img/all/21.png',
    '../../img/brands.img/all/22.png',
    '../../img/brands.img/all/23.png'
]
for(var i = 0 ; i <  listImg_4.length  ; i++ ){
    var text_4 =  "<div class='card_img'>  <img src= "+ listImg_4[i] + ">"
        {
       document.getElementById("myIMG-4").innerHTML += text_4;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////
var listImg_5 = [
    '../../img/brands.img/all/25.png',  
    '../../img/brands.img/all/26.png',
    '../../img/brands.img/all/27.png',
    '../../img/brands.img/all/27.png',
    '../../img/brands.img/all/29.png',
    '../../img/brands.img/all/30.png',
    '../../img/brands.img/all/31.png',
    '../../img/brands.img/all/32.png',
    '../../img/brands.img/all/33.png'
]
for(var i = 0 ; i <  listImg_5.length  ; i++ ){
    var text_5 =  "<div class='card_img'>  <img src= "+ listImg_5[i] + ">"
        {
       document.getElementById("myIMG-5").innerHTML += text_5;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////
var listImg_6 = [
    '../../img/brands.img/all/23.png',  
    '../../img/brands.img/all/13.png',
    '../../img/brands.img/all/12.png',
    '../../img/brands.img/all/22.png'
]
for(var i = 0 ; i <  listImg_6.length  ; i++ ){
    var text_6 =  "<div class='card_img'>  <img src= "+ listImg_6[i] + ">"
        {
       document.getElementById("myIMG-6").innerHTML += text_6;
    }
}

////////////////////////////////////////////////////////////////////////////////////////

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){


for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab");

};

////////////////////////////////////////////////////////////////////////////////////////// 

var listImg = [   
    '../../img/brands.img/all/2.png',
    '../../img/brands.img/all/3.png',
    '../../img/brands.img/all/4.png',
    '../../img/brands.img/all/5.png',
    '../../img/brands.img/all/6.png',
    '../../img/brands.img/all/7.png',
    '../../img/brands.img/all/8.png',
    '../../img/brands.img/all/9.png',
    '../../img/brands.img/all/10.png',
    '../../img/brands.img/all/11.png',
    '../../img/brands.img/all/12.png',
    '../../img/brands.img/all/13.png',
    '../../img/brands.img/all/14.png',
    '../../img/brands.img/all/15.png',
    '../../img/brands.img/all/16.png',
    '../../img/brands.img/all/17.png',
    '../../img/brands.img/all/18.png',
    '../../img/brands.img/all/19.png',
    '../../img/brands.img/all/20.png',
    '../../img/brands.img/all/21.png',
    '../../img/brands.img/all/22.png',
    '../../img/brands.img/all/23.png',
    '../../img/brands.img/all/24.png',
    '../../img/brands.img/all/25.png',
    '../../img/brands.img/all/26.png',
    '../../img/brands.img/all/27.png',
    '../../img/brands.img/all/28.png',
    '../../img/brands.img/all/29.png',
    '../../img/brands.img/all/30.png',
    '../../img/brands.img/all/31.png',
    '../../img/brands.img/all/32.png',
    '../../img/brands.img/all/33.png',
    '../../img/brands.img/all/34.png',
    '../../img/brands.img/all/35.png'
]
for(var i = 0 ; i <  listImg.length  ; i++ ){
    var text =  "<div class='card_img'>  <img src= "+ listImg[i] + ">"
 {
        document.getElementById("myIMG").innerHTML += text;
    }
};