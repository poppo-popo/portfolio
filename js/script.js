$(function(){

  $('.inner').hide();
  
	$('#accordion p').click(function(){
	  $(this).next().slideToggle();
    $('#accordion p').not($(this)).next().slideUp();
	});

  $(function() {
    $('.btn-gNav').on("click", function(){
  
      $(this).toggleClass('open');
      $('#gNav').toggleClass('open');
    });
  });

  //スムーススクロール
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  
  // メニューをクリックされたら、非表示にする
  $(function() {
    $('.gNav-menu').on("click", function(){
       $('#gNav').removeClass('open');
    });
  });

  
  //wow.js導入
  $(function(){
    new WOW().init();
  });


})
