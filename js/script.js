$('.with-drop').mouseenter(
  function(){
    $('.drop').addClass('active');
  }
);
$('.with-drop').click(
  function(){
    $('.drop').removeClass('active');
  }
);

$('.it').mouseenter(
  function(){
    $('.it i').removeClass('fa-sort-down');
    $('.it i').addClass('fa-sort-up');
  }
);
$('.it').mouseleave(
  function(){
    $('.it i').removeClass('fa-sort-up');
    $('.it i').addClass('fa-sort-down');
  }
);
