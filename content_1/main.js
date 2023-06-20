setTimeout(function(){
    $('.name-box-onoff').css('display','block')
},5600);

$('.skill-button').on('click',function(){
    $('.sills-box-onoff').css('display','block')
    $('.name-box-onoff').css('display','none')
});
$('.btn-x').on('click',function(){
    $('.sills-box-onoff').css('display','none')
    $('.name-box-onoff').css('display','block')
});

let toptext = document.querySelector('.main-box2-text');
let toptext2 = document.querySelector('.main-box3-text');
let toptext3 = document.querySelector('.main-box4-text');
let toptext4 = document.querySelector('.main-box5-text');
let toptext5 = document.querySelector('.main-box6-text');
let mainbox2text = document.querySelector('.main-box2-top-text');
let mainbox3text = document.querySelector('.main-box3-top-text');
let mainbox4text = document.querySelector('.main-box4-top-text');
let mainbox5text = document.querySelector('.main-box5-top-text');
let mainbox6text = document.querySelector('.main-box6-top-text');
let posterbox1 = document.querySelector('.poster-box1');
let posterbox1_2 = document.querySelector('.poster-box2');
let characterbox1 = document.querySelector('.character-box');
let characterbox2 = document.querySelector('.character-mockup1');
let characterbox3 = document.querySelector('.character-mockup2');
let pamphletbox = document.querySelector('.pamphlet-mockup1');
let pamphletbox2 = document.querySelector('.pamphlet-mockup2');
let uibox1 = document.querySelector('.ui-box1');
let uibox2 = document.querySelector('.ui-box1-mockup1');
let uibox3 = document.querySelector('.ui-box2');
let uibox4 = document.querySelector('.ui-box2-2');
let uibox5 = document.querySelector('.ui-box2-mockup1');
let uibox6 = document.querySelector('.meta-box1');
let uibox7 = document.querySelector('.meta-box2');
let uibox8 = document.querySelector('.meta-box3');
let uibox9 = document.querySelector('.meta-mockup');
let uiboxlink = document.querySelector('.pigma-link');
let img1 = document.querySelector('.img-box1');
let img1_1 = document.querySelector('.img1');
let img1_2 = document.querySelector('.img2');
let img1_3 = document.querySelector('.img3');
let img2 = document.querySelector('.img-box2');
let img2_1 = document.querySelector('.img4');
let img2_2 = document.querySelector('.img5');
let img3 = document.querySelector('.img-box3');
let img3_1 = document.querySelector('.img6');
let img3_2 = document.querySelector('.img7');
let maxbox = document.querySelector('.max-box');




window.addEventListener('scroll',function(){
    var value = window.scrollY;
    console.log('scrollY',value);

if (value > 1200){
    toptext.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 1500){
    mainbox2text.style.animation = "opacityani 1s linear forwards";
}
if (value > 1600){
    posterbox1.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 2200){
    posterbox1_2.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 3600){
    toptext2.style.animation = "upani 1s ease-in-out forwards";
}
if (value >3900){
    mainbox3text.style.animation = "opacityani 1s linear forwards";
    characterbox1.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 4400){
    characterbox2.style.animation = "leftslideani 1s ease-in-out forwards";
    characterbox3.style.animation = "rightslideani 1s ease-in-out forwards";
}
if (value > 5600){
    toptext3.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 5800){
    mainbox4text.style.animation = "opacityani 1s linear forwards";
}
if (value > 6200){
    pamphletbox.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 6900){
    pamphletbox2.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 7900){
    toptext4.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 8100){
    mainbox5text.style.animation = "opacityani 1s linear forwards";
}
if (value > 8300){
    uibox1.style.animation = "upani 1s ease-in-out forwards";
    uibox2.style.animation = "rightslideani 1s ease-in-out forwards";
}
if (value > 9400){
    uibox3.style.animation = "upani 1s ease-in-out forwards";
    uibox4.style.animation = "upani 1s ease-in-out forwards";
    uibox5.style.animation = "leftslideani 1s ease-in-out forwards";
}
if (value > 10600){
    uibox6.style.animation = "upani 1s ease-in-out forwards";
    uibox7.style.animation = "upani 1s ease-in-out forwards";
    uibox8.style.animation = "upani 1s ease-in-out forwards";
    uibox9.style.animation = "rightslideani 1s ease-in-out forwards";
}
if (value > 12000){
    uiboxlink.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 12200){
    toptext5.style.animation = "upani 1s ease-in-out forwards";
}
if (value > 12300){
    mainbox6text.style.animation = "opacityani 1s linear forwards";
}
if (value > 12800){
    img1.style.animation = "opacityani 1s ease-in-out forwards";
    img1_1.style.animation = "leftslideani 1s ease-in-out forwards";
    img1_2.style.animation = "leftslideani 1s .2s ease-in-out forwards";
    img1_3.style.animation = "leftslideani 1s .4s ease-in-out forwards";
}
if (value > 13400){
    img2.style.animation = "opacityani 1s ease-in-out forwards";
    img2_1.style.animation = "leftslideani 1s ease-in-out forwards";
    img2_2.style.animation = "leftslideani 1s .2s ease-in-out forwards";
}
if (value > 14300){
    img3.style.animation = "opacityani 1s ease-in-out forwards";
    img3_1.style.animation = "leftslideani 1s ease-in-out forwards";
    img3_2.style.animation = "leftslideani 1s .2s ease-in-out forwards";
}
if (value > 15300){
    maxbox.style.animation = "opacityani 1s ease-in-out forwards";
}


});
