$(function() {


    // Header
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let menu2 = $("#menu2");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function () {
        let introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
        });

        function checkScroll(scrollPos, introH) {
            if( scrollPos > introH ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

        // Smooth scroll

        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            let elementId = $(this).data('scroll');
            let elementOffset = $(elementId).offset().top;

            menu2.removeClass("show");

            $("html, body").animate({
                scrollTop: elementOffset
            });

        });
    


        // Nav Toggle


        $("#navToggle").on("click", function(event) {
            event.preventDefault();

            menu2.toggleClass("show");
        });


});