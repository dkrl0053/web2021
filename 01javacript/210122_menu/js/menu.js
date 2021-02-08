function nowMenu(menu){
  console.log(menu);
  $("ul.menu>li").eq(menu).addClass("active");
    if( menu == "main"){
      $(".bar").css({opacity:0}); //menu 0 1 2 3 4
    }else{
      $(".bar").css({left:200*menu}); //menu 0 1 2 3 4
    }
  //$("ul.menu>li").hover(function(){},function(){}); mouseenter / mouseleave
  $("ul.menu>li").hover(function(){
    var menuLi = $(this).index();
      if( menu == "main"){
        $(".bar").css({opacity:1});
      }
    $(".bar").stop().animate({left:menuLi*200},100);
  },function(){
      if( menu == "main"){
        $(".bar").css({opacity:0});
      }
    $(".bar").stop().animate({left:menu*200},100);
  });
}
