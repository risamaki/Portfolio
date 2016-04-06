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
        animatedIn:'zoomIn',
        animatedOut:'bounceOut',
        color:'#39BEB9', // where we get the background color of the Modal
        //beforeOpen: function() {
        //
        //    var children = $(".thumb");
        //    var index = 0;
        //
        //    function addClassNextChild() {
        //        if (index == children.length) return;
        //        children.eq(index++).show().velocity("transition.expandIn", { opacity:1, stagger: 250 });
        //        window.setTimeout(addClassNextChild, 200);
        //    }
        //
        //    addClassNextChild();
        //
        //},
        //afterClose: function() {
        //    $(".thumb").hide();
        //
        //}
    });
});


//jQuery(document).ready(function($) {
//        // Call Gridder
//        $('.gridder').gridderExpander({
//            scroll: true,
//            scrollOffset: 30,
//            scrollTo: "panel",                  // panel or listitem
//            animationSpeed: 400,
//            animationEasing: "easeInOutExpo",
//            showNav: true,                      // Show Navigation
//            //nextText: "Next",                   // Next button text
//            //prevText: "Previous",               // Previous button text
//            //closeText: "Close",                 // Close button text
//            onStart: function(){
//                console.log("Gridder Initialized");
//            },
//            onContent: function(){
//                //Gridder Content Loaded
//            },
//            onClosed: function(){
//                //Gridder Closed
//            }
//        });
//
//    });