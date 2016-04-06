$(document).ready(function() {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function(e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 1300,
            easing: 'ease-in-out'
        });
    });

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);

    $("#meetup-about").animatedModal({
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOut',
        color:'#f7f7f7',
    });

    $("#roulette-about").animatedModal({
        modalTarget:'lightSpeedIn',
        animatedIn:'slideInDown',
        animatedOut:'zoomOutUp',
        color:'#f7f7f7',
    });

    $("#portfolio-about").animatedModal({
        modalTarget:'portfolioModal',
        animatedIn:'bounceInLeft',
        animatedOut:'lightSpeedOut',
        color:'#f7f7f7',
    });


});

