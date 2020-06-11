$(document).ready(
  function(){
    // NOTE: per il dropdown
    $('.with-drop').mouseenter(
      function(){
        $('.drop').removeClass('active');
        $(this).children('.drop').addClass('active');
      }
    );
    // NOTE: quando clicco il with drop esce il drop
    $('.with-drop > a').click(
      function(){
        $(this).siblings('.drop').toggleClass('active');
      }
    );
    // // NOTE: quando clicco fuori il drop il drop scompare ma non funziona :C
    // $(document).click(
    //   function(){
    //     $('.drop.active').removeClass('active');
    //   }
    // );

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

    // NOTE: per click su burger
    $('.burger > i:first-child').click(
      function(){
        $('.burger i:first-child').addClass('hidden');
        $('.burger ul').show();
        $('.burger i:nth-child(2)').removeClass('hidden');
      }
    );
    $('.burger > i:nth-child(2)').click(
      function(){
        $('.burger i:nth-child(2)').addClass('hidden');
        $('.burger ul').hide();
        $('.burger i:first-child').removeClass('hidden');
      }
    );
  }
);
