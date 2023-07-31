// 목차 페이지 만드는 원 두개 애니메이션
setTimeout(function(){
    $('.startani').css('display','block')
    $('.startani2').css('display','block')
},5500);
// 목차 페이지 나타나는 시간 애니메이션
setTimeout(function(){
    $('.index').css('display','block')
},7800);

$('.page1_text').mouseover(function(){
    // ul li 콘센트 애니메이션
    $('.page1_text').addClass('page_text_hover')
    $('.page2_text').removeClass('page_text_hover')
    $('.page3_text').removeClass('page_text_hover')
    // 비디오 재생
    $('.page1').css('display','block')
    $('.page2').css('display','none')
    $('.page3').css('display','none')
    // 로딩애니메이션
    $('.page1_deco').css('display','block')
    $('.page2_deco').css('display','none')
    $('.page3_deco').css('display','none')
    // 로딩 후 텍스트
    $('.page1_deco_text').css('display','block')
    $('.page2_deco_text').css('display','none')
    $('.page3_deco_text').css('display','none')
});
$('.page2_text').mouseover(function(){
        // ul li 콘센트 애니메이션
    $('.page2_text').addClass('page_text_hover')
    $('.page1_text').removeClass('page_text_hover')
    $('.page3_text').removeClass('page_text_hover')
        // 비디오 재생
    $('.page2').css('display','block')
    $('.page1').css('display','none')
    $('.page3').css('display','none')
        // 로딩애니메이션
    $('.page1_deco').css('display','none')
    $('.page2_deco').css('display','block')
    $('.page3_deco').css('display','none')
        // 로딩 후 텍스트
    $('.page1_deco_text').css('display','none')
    $('.page3_deco_text').css('display','none')
    $('.page2_deco_text').css('display','block')
});
$('.page3_text').mouseover(function(){
            // ul li 콘센트 애니메이션
    $('.page3_text').addClass('page_text_hover')
    $('.page1_text').removeClass('page_text_hover')
    $('.page2_text').removeClass('page_text_hover')
            // 비디오 재생
    $('.page3').css('display','block')
    $('.page2').css('display','none')
    $('.page1').css('display','none')
            // 로딩애니메이션
    $('.page1_deco').css('display','none')
    $('.page2_deco').css('display','none')
    $('.page3_deco').css('display','block')
            // 로딩 후 텍스트
    $('.page3_deco_text').css('display','block')
    $('.page1_deco_text').css('display','none')
    $('.page2_deco_text').css('display','none')
});
// 전원 off 버튼
setTimeout(function(){
    $('.power_off').css('display','block')
},8500);
$('.power_off').on('click',function(){
                // ul li 콘센트 애니메이션
    $('.page1_text').removeClass('page_text_hover')
    $('.page2_text').removeClass('page_text_hover')
    $('.page3_text').removeClass('page_text_hover')
                        // 비디오 재생
    $('.page1').css('display','none')
    $('.page2').css('display','none')
    $('.page3').css('display','none')
                        // 로딩애니메이션
    $('.page1_deco').css('display','none')
    $('.page2_deco').css('display','none')
    $('.page3_deco').css('display','none')
                        // 로딩 후 텍스트
    $('.page1_deco_text').css('display','none')
    $('.page2_deco_text').css('display','none')
    $('.page3_deco_text').css('display','none')
});
// 전원 버튼 애니메이션
let indexani = document.querySelector('.index');

$('.power_off').on('click',function(){
        indexani.style.display = 'none';
        $('.power_off2').css('display','block')
        $('.power_off1').css('display','none')
        $('.nameani-con').css('display','block')
            // 3D 애니메이션
        // $('.container').css('display','block')
        // $('.container2').css('display','block')
        // $('.left-box').css('display','block')
        // $('.right-box').css('display','block')
        // $('.bottom-box').css('display','block')
        // $('.front-box').css('display','block')
        // index 박스 off
        $('.startani').css('display','none')
        $('.startani2').css('display','none')
});  
$('.power_off2').on('click',function(){
        indexani.style.display = 'block';
        $('.power_off1').css('display','block')
        $('.power_off2').css('display','none')
        $('.nameani-con').css('display','none')
            // 3D 애니메이션
        // $('.container').css('display','none')
        // $('.container2').css('display','none')
        // $('.left-box').css('display','none')
        // $('.right-box').css('display','none')
        // $('.bottom-box').css('display','none')
        // $('.front-box').css('display','none')
        // index 박스 on
        $('.startani').css('display','block')
        $('.startani2').css('display','block')
});  

