$(document).ready(function () {
    $("#btn-menu").click(function (e) {
        $(".menu-content").slideToggle();
    });
    $('#slide-linh-vuc').on('initialized.owl.carousel', function (e) {
        $("#slide-linh-vuc .owl-stage").css("margin-left", "-100px");
        $("#slide-linh-vuc.owl-carousel .active").removeClass("center");
        $("#slide-linh-vuc.owl-carousel .active").first().addClass("center");
        $("#slide-linh-vuc.owl-carousel .active .item .item-title").first().addClass("show");
    });
    $("#slide-linh-vuc").owlCarousel({
        items: 1,
        center: true,
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {


        },
    });


    $('#slider-doi-tac').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1366: {
                items: 5,
                nav: true,
            },
            1600: {
                items: 5,
                nav: true,
            }
        },
    });

    $('#slider-su-kien').on('initialized.owl.carousel', function (e) {
        $("#slider-su-kien .owl-stage").css("margin-left", "-100px");
        $("#slider-su-kien.owl-carousel .active").removeClass("center");
        $("#slider-su-kien.owl-carousel .active").first().addClass("center");
        $("#slider-su-kien.owl-carousel .active .item .item-title").first().addClass("show");
    });
    $('#slider-su-kien').owlCarousel({
        items: 3.5,
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        center: false,
        animateOut: 'hideOut',
        animateIn: 'bounceInUp',

        responsive: {
            0: {
                items: 1.3,
                nav: true
            },
            600: {
                items: 1.5,
                nav: false
            },
            1366: {
                items: 3,
                nav: true,
            },
            1600: {
                items: 3.5,
                nav: true,
            }
        },
    });
    $('#slider-su-kien').on('dragged.owl.carousel', function (e) {
        $("#slider-su-kien .owl-stage").css("margin-left", "-100px");
        $("#slider-su-kien.owl-carousel .active").removeClass("center");
        $("#slider-su-kien.owl-carousel .active").first().addClass("center");
        $("#slider-su-kien .item-title").removeClass("show");
        $("#slider-su-kien.owl-carousel .active.center .item .item-title").first().addClass("show");
    });
    $('#slider-su-kien').on('changed.owl.carousel', function (e) {
        setTimeout(function () {
            $("#slider-su-kien .owl-stage").css("margin-left", "-100px");
            $("#slider-su-kien.owl-carousel .active").removeClass("center");
            $("#slider-su-kien.owl-carousel .active").first().addClass("center");
            $("#slider-su-kien .item-title").removeClass("show");
            $("#slider-su-kien.owl-carousel .active.center .item .item-title").first().addClass("show");

        }, 300)
    });

});