$(document).ready(
  function(){
    // NOTE: per il dropdown
    $('.with-drop').mouseenter(
      function(){
        $('.drop').removeClass('active');
        $(this).children('.drop').addClass('active');
      }
    );
    $('.with-drop > a').click(
      function(){
        $(this).siblings('.drop').toggleClass('active');
      }
    );

    // NOTE: per il cambio icona
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
  }
);
