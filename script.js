$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    $('#menu a[href]').on('click', function (event) {
        $('.hamburger').trigger('click');
    });

    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });

    // $(window).on("scroll", function () {
    //     if ($(window).scrollTop() > 50) {
    //         $(".left-header a, .hamburger span").addClass("activecolor");
    //     } else {
    //         //remove the background property so it comes transparent again (defined in your css)
    //         $(".left-header a, .hamburger span").removeClass("activecolor");
    //     }
    // });

});
