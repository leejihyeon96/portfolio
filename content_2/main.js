$('.mouseover').mouseover(function(){
    $('.sky1').css('left','25%');
    $('.sky2').css('left','25%');
    $('.sky3').css('right','25%');
    $('.dragon').css('left','30%');
    
});
$('.mouseover').mouseleave(function(){
    $('.sky1').css('left','20%');
    $('.sky2').css('left','20%');
    $('.sky3').css('right','20%');
    $('.dragon').css('left','50%');
});

$('.play-text').mouseover(function(){
    $('.gameplay-bg-r').css('display','block');
    $('.gameplay-bg').css('opacity','1')
});
$('.play-text').mouseleave(function(){
    $('.gameplay-bg-r').css('display','none');
    $('.gameplay-bg').css('opacity','.7');
});

$('.logo1').on('click',function(e){
    $('body').animate({
        scrolltop: $(window).height(2000)
    },1200);
});
// 스크롤 애니메이션
let mainText = document.querySelector(".line h2");
let mainText2 = document.querySelector('.line2 h2');
let mainText3 = document.querySelector('.line3 h2');
let mainText4 = document.querySelector('.line4 h2');
let storyBox = document.querySelector('.story-box');
let characterBox = document.querySelector('.story-character');
let storyText = document.querySelector('.story-text');
let openWorldBox = document.querySelector('.main3-box1');
let openWorldBox2 = document.querySelector('.main3-box2');
let openWorldBox3 = document.querySelector('.main3-box3');

window.addEventListener('scroll',function(){
var value = window.scrollY;
console.log('scrollY',value);


if (value > 700){
mainText.style.animation = "lineAni 1s ease-in forwards";
storyBox.style.animation = "topSlide 1s ease-in forwards";
characterBox.style.animation = "leftSlide 1s ease-in forwards";
storyText.style.animation = "rightSlide 1s ease-in forwards";
}else {
mainText.style.animation = `lineDisappear 1s ease-in`;
storyBox.style.animation = `topSlideDisappear 1s ease-in`;
characterBox.style.animation = `leftSlideDisappear 1s ease-in`;
storyText.style.animation = `rightSlideDisappear 1s ease-in`;
}
if (1400 < value){
mainText.style.animation = `lineDisappear 1s ease-in`;
}
if (value > 1700){
mainText2.style.animation = "lineAni 1s ease-in forwards";    
}else {
mainText2.style.animation = `lineAniDisappear 1s ease-in`;
}
if (2000 < value){
storyBox.style.animation = `topSlideDisappear2 1s ease-in`;
characterBox.style.animation = `leftSlideDisappear 1s ease-in`;
storyText.style.animation = `rightSlideDisappear 1s ease-in`;
}
if (value > 1800){
openWorldBox.style.animation = "opacityAni 1s ease-in forwards";
}else {
openWorldBox.style.animation = `opacityAniDisappear 1s ease-in`;
}
if (3000 < value){
openWorldBox.style.animation = `opacityAniDisappear 1s ease-in`;
}
if (value > 2200){
openWorldBox2.style.animation = "opacityAni2 1s ease-in forwards";
}else {
openWorldBox2.style.animation = `opacityAni2Disappear 1s ease-in`;
}
if (value > 2400){
    openWorldBox3.style.animation = "opacityAni 1s ease-in forwards";
}else {
    openWorldBox3.style.animation = `opacityAniDisappear 1s ease-in`;
}
if (value > 3100){
    mainText3.style.animation = "lineAni 1s ease-in forwards";
}else {
    mainText3.style.animation = `lineAniDisappear 1s ease-in`;
}
if (value > 4400){
    mainText4.style.animation = "lineAni 1s ease-in forwards";
}else {
    mainText4.style.animation = `lineAniDisappear 1s ease-in`;
}
});




