'use strict'

// web browser
const header_wrap = document.querySelector('.header_wrap');
const gnb_depth_1 = document.querySelector('.gnb_depth_1');
const header_scroll = document.querySelector('.header_s_bg');

gnb_depth_1.addEventListener('mouseover', function(){
  header_wrap.classList.add('on');
})

header_wrap.addEventListener('mouseout', function(){
  header_wrap.classList.remove('on');
})







$(window).scroll(function(){
  const scrollY = $(window).scrollTop();
  const windowY = window.scrollY;

  if(windowY > 500){
    $(".top").addClass("view");
  } else if(windowY <= 500){
    $(".top").removeClass("view");
  }


  console.log(windowY);
  if(windowY > 300){
    $(".header_wrap").addClass("scroll_menu");
  } else if(windowY <= 300){
    $(".header_wrap").removeClass("scroll_menu");
  }
});

$(".top").click(function(){
  $("html,body").animate({scrollTop:0},1000);
});


$(".toggle_menu").click(function(){
  const toggle = $(".toggle_menu").attr("class");
  if(toggle == "toggle_menu"){
      $(".toggle_menu").addClass("change");
      $(".header_gnb").stop().animate({left:0},300);
  }else{
      $(".toggle_menu").removeClass("change");
      $(".header_gnb").stop().animate({left:"-100%"},300);
  }
});



// mobile
// const toggleBtn = document.querySelector('.toggle_menu');

// toggleBtn.addEventListener('click', function(){
//   header_wrap.classList.toggle('m_on');
//   toggleBtn.classList.toggle('change');
// })