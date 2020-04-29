$(function() {
    $(".menu-toggle").click(function() {
        $(".menu-toggle, nav").toggleClass("active");
    });
        $("ul").click(function() {
        $(".menu-toggle, nav").toggleClass("active");
    });
    //animet container2
    $(window).scroll(function() {
        $("#object").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
                $(this).css("visibility", "visibil");
            }
        });
    });
    $(window).scroll(function() {
        $("#object1").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
                $(this).css("visibility", "visibil");
            }
        });
    });
    $(window).scroll(function() {
        $("#object2").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideLeft");
                $(this).css("visibility", "visibil");
            }
        });
    });
    //top butan
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("#topbut").fadeIn();
        } else {
            $("#topbut").fadeOut();
        }
    });
    $("#topbut").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
        //click function Gyux
    $("header a.arrow").click(function() {
        var elem = $(".container2"),
            elemTop = elem.offset().top;
        $("body, html").animate({ scrollTop: elemTop }, 500);
    });
    //vernagir
    $('.vernagir').textillate({ 
           in: { effect: 'fadeInLeft',delay:10},
           out: { effect: 'flash'},
        loop: true
       });
    //anime video
        $(window).scroll(function() {
        $(".video").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 300) {
                $(this).addClass("fadeIn");
                $(this).css("visibility", "visibil");
            }
        });
    });
            $(window).scroll(function() {
        $(".text").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
                $(this).css("visibility", "visibil");
            }
        });
    });
});

