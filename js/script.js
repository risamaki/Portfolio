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
});