$(function() {


    $('.left-nav').each(function(i){
      $(this).children().eq(i).css('color', 'rgb(247, 215, 0)');
    });
    $('#slider1 .slide').eq(0).css({
        'opacity': '1',
        'display': 'block'
    });
    $('#slider1 .slide').each(function(){
      $('.right-nav').append('<li class="dots-grey" data-slide='+$(this).index()+'></li>');
    });
    $('.right-nav li').eq(0).removeClass('dots-grey').addClass('dots-yellow');
  var active = 0;
  $(".right-nav li").click(function() {
    var target = $(this).attr("data-slide");

    // HIDING CURRENT SLIDE
    $("#slider1 .slide")
      .eq(active)
      .animate(
        {
          opacity: 0
        },
        500,
        function() {
          $(this).css("display", "none");

          // SHOWING SELECTED SLIDE
          $("#slider1 .slide")
            .eq(target)
            .css("display", "block")
            .animate(
              {
                opacity: 1
              },
              500
            );
        }
      );

    // CHANGING NAV COLOR

    $(".right-nav li")
      .eq(active)
      .removeClass("dots-yellow")
      .addClass("dots-grey");

    $(".right-nav li")
      .eq(target)
      .removeClass("dots-grey")
      .addClass("dots-yellow");

    // ASSIGNING ACTIVE SLIDE TO THE NEW PRESENT SLIDE
    active = target;
  });

  // SCROLL

  $('.left-nav li').click(function(){
    var target = $(this).index();
    target = $('.section').eq(target);
    $('body, html').animate({scrollTop: target.offset().top+'px'}, 800);
  });

  // Progress bars
  progressBars();
  $(window).on("scroll", function(){
    progressBars();
  });

  function progressBars(){
    let windowBottom = $(window).scrollTop() + $(window).height();
    let skillsTop = $('.section-3_skills-container').offset().top + $('.section-3_skills-container').height();
    if(windowBottom>=skillsTop){
      $('.skill').each(function(i){
        let progress = $(this).attr('data-progress');
        $('.progress').eq(i).css('width', progress + '%');
        $('.skills-percent').eq(i).text(progress+'%');
        $('.skills-percent').css('opacity', 1);
        $('.progress').css('opacity', 1);
        console.log('działa');
      });
      $(window).off('scroll');
    }
  }

});
