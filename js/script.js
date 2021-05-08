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
