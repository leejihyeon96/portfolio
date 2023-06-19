
$(".deadspace1-buy").mouseover(function(){
    $('.box1').css('display','block');
});
$(".deadspace1-buy").mouseleave(function(){
    $('.box1').css('display','none');
});
$(".deadspace2-buy").mouseover(function(){
    $('.box2').css('display','block');
});
$(".deadspace2-buy").mouseleave(function(){
    $('.box2').css('display','none');
});
$(".deadspace3-buy").mouseover(function(){
    $('.box3').css('display','block');
});
$(".deadspace3-buy").mouseleave(function(){
    $('.box3').css('display','none');
});

$('.story-btn2').on('click',function(){
    $('.story-box2').css('display','block');
    $('.story-btn2').css('opacity','1');
    $('.story-box').css('display','none');
    $('.story-btn').css('opacity','.5');
    $('.story-box3').css('display','none');
    $('.story-btn3').css('opacity','.5');
});
$('.story-btn').on('click',function(){
    $('.story-box2').css('display','none');
    $('.story-btn2').css('opacity','.5');
    $('.story-box').css('display','block');
    $('.story-btn').css('opacity','1');
    $('.story-box3').css('display','none');
    $('.story-btn3').css('opacity','.5');
});
$('.story-btn3').on('click',function(){
    $('.story-box2').css('display','none');
    $('.story-btn2').css('opacity','.5');
    $('.story-box').css('display','none');
    $('.story-btn').css('opacity','.5');
    $('.story-box3').css('display','block');
    $('.story-btn3').css('opacity','1');
});

$('.screen2').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-65vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-100vw)')
    }
});
$('.screen1').on('click',function(){
    $('.slide-con').css('transform', 'translateX(0vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(0vw)')
    }
});
$('.screen3').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-130vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-200vw)')
    }
});
$('.screen4').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-195vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-300vw)')
    }
});
$('.screen5').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-260vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-400vw)')
    }
});
$('.screen6').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-325vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-500vw)')
    }
});
$('.screen7').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-390vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-600vw)')
    }
});
$('.screen8').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-455vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-700vw)')
    }
});
$('.screen9').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-520vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-800vw)')
    }
});
$('.screen10').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-585vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-900vw)')
    }
});
$('.screen11').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-650vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-1000vw)')
    }
});
$('.screen12').on('click',function(){
    $('.slide-con').css('transform', 'translateX(-715vw)')
    if (innerWidth < 1280){
        $('.slide-con').css('transform', 'translateX(-1100vw)')
    }
});






let mouseCursor = document.querySelector('.mouse');
let mouseCursor2 = document.querySelector('.mouse2');
let mouseCursor3 = document.querySelector('.mouse3');
let mouseCursor4 = document.querySelector('.mouse4');


window.addEventListener("scrollY", cursor);
window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.left = e.screenX + "px";
    mouseCursor.style.top = e.screenY + 'px';
    mouseCursor2.style.left = e.screenX + "px";
    mouseCursor3.style.top = e.screenY + "px";
    mouseCursor4.style.left = e.screenX + "px";
    mouseCursor4.style.top = e.screenY + "px";
};


let scrollani1 = document.querySelector('.game-buy');
let scrollani2 = document.querySelector('.game-buy2');
let scrollani3 = document.querySelector('.ea-logo');
let scrollani4 = document.querySelector('.ea-logo2');
let scaleani1 = document.querySelector('.deadspace1');
let scaleani2 = document.querySelector('.deadspace2');
let scaleani3 = document.querySelector('.deadspace3');
let textani1 = document.querySelector('.welcome-text');
let issacani1 = document.querySelector('.main-box-bg');
let issacani2 = document.querySelector('.re-box');
let box2ani1 = document.querySelector('.main-box2-img');
let box2ani1_2 = document.querySelector('.main-box2-img-text');
let box2ani2 = document.querySelector('.main-box2-img2');
let box2ani2_2 = document.querySelector('.main-box2-img2-text');
let box2ani3 = document.querySelector('.main-box2-img3');
let box2ani3_2 = document.querySelector('.main-box2-img3-text');
let eaani1 = document.querySelector('.ea-deadspace-logo');
let eaani2 = document.querySelector('.ea-deadspace-logo-text');
let eaani3 = document.querySelector('.main-box4-btn');
let test = document.querySelector('.left');


window.addEventListener('scroll',function(){
 var value = window.scrollY;
 console.log('scrollY',value);




if (value > 600){
     scrollani1.style.animation = "on 0.3s linear";
     scrollani1.style.display = "block";
        this.setTimeout(function(){
            $('.game-buy2').css('display','block')
        },500);
        scrollani2.style.animation = "on2 .3s linear";
}
if (value > 1700) {
    scaleani1.style.display = "inline-block";
    scaleani1.style.animation = "scalexy 0.3s linear";
    scaleani2.style.display = "inline-block";
    scaleani2.style.animation = "scalexy 0.3s linear";
    scaleani3.style.display = "inline-block";
    scaleani3.style.animation = "scalexy 0.3s linear";

}
if (value > 1900){
    scrollani3.style.animation = "on4 0.3s linear";
    scrollani4.style.animation = "on4 0.3s linear";
    this.setTimeout(function(){
        $('.ea-logo').css('animation','ani3 2s linear infinite')
        $('.ea-logo2').css('animation','ani4 2s linear infinite')
    },100);
} 
if (value > 2900){
    textani1.style.display = "block";
    textani1.style.animation = "zizic 1s linear forwards";
}
if (value > 3900){
    issacani1.style.animation = `OpacityAni 1s ease-in forwards`
    issacani2.style.animation = `topani 1s ease-in forwards`
}
if (value > 6000){
    if (innerWidth < 1280){
        box2ani1.style.animation = `rightani 1s ease-in-out forwards`;
        box2ani1_2.style.animation = `leftani 1s ease-in-out forwards`;
    }
}
if (value > 6200){
    box2ani1.style.animation = `rightani 1s ease-in-out forwards`;
    box2ani1_2.style.animation = `leftani 1s ease-in-out forwards`;
}
if (value > 6400){
    if (innerWidth < 1280){
        box2ani2.style.animation = `leftani 1s ease-in-out forwards`;
        box2ani2_2.style.animation = `rightani 1s ease-in-out forwards`;
    }
}
if (value > 6800){
    box2ani2.style.animation = `leftani 1s ease-in-out forwards`;
    box2ani2_2.style.animation = `rightani 1s ease-in-out forwards`;
}
if (value > 7100){
    if (innerWidth < 1280){
        box2ani3.style.animation = `rightani 1s ease-in-out forwards`;
        box2ani3_2.style.animation = `leftani 1s ease-in-out forwards`;
    }
}
if (value > 7500){
    box2ani3.style.animation = `rightani 1s ease-in-out forwards`;
    box2ani3_2.style.animation = `leftani 1s ease-in-out forwards`;
}
if (value > 10700){
    eaani1.style.animation = `upani 1s ease-in-out forwards`
    eaani2.style.animation = `upani 1s .3s ease-in-out forwards`
    eaani3.style.animation = `upani 1s .6s ease-in-out forwards`
}
});


// var test = document.documentElement.style;
// document.addEventListener('mouseup',function(e){
//     test.setProperty('--mouse-x', e.clientX);

// })


















