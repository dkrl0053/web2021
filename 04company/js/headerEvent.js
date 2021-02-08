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

// header_scroll.addEventListener('wheel')
// mobile
// const toggleBtn = document.querySelector('.toggle_menu');

// toggleBtn.addEventListener('click', function(){
//   header_wrap.classList.toggle('m_on');
//   toggleBtn.classList.toggle('change');
// })