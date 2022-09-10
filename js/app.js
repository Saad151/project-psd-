$(function () {
    $('.banner_slider').slick({
        prevArrow: '<i class="fa-solid fa-less-than banner_slider_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-greater-than banner_slider_arrow"></i>',
    });

    // menu active
    
    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop()


        if (scrollPosition > 200) {
            $('#nav_menu').addClass('bg_menu')
        }else{
            $('#nav_menu').removeClass('bg_menu')
        }
    })


    var typed = new Typed('.type', {
        strings: ['Design','Developer','Freelancer'],
        typeSpeed:100,
        loop:true,
    });





    $('#timer').countdown('2023/11/02', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item unique"><span>%D</span><br><span>Day</span></div>'
        + '<div class="count_down_item"><span>%H</span><br><span>Hours</span></div> '
        + '<div class="count_down_item"><span>%M</span><br><span>Min</span></div>'
        + '<div class="count_down_item unique"><span>%S</span><br><span>Sec</span></div>'));
    });
})

// venobox
new VenoBox();

//aos....
AOS.init();