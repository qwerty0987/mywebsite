// Flex slider
// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: false,
    pauseOnHover: false,
    slideshowSpeed: 7500,
    randomize: true
  });
});

// Resume
$(document).ready(function() {
    $('.resume').hide();
    $('img.go_up').hide();
    $('a.resume_title').click(function(e) {
        var x = $(this).attr("id");
        var $item = $('.' + x);
        if (!$item.is(":visible")) {
            $($item).slideToggle(400, function() {$('img.go_up').show();});
            var n = e.pageY - 20;
            $('html, body').animate({ scrollTop: n },'50');
        }
        else {
//            $("html, body").animate({ scrollTop: 0 }, '50');
            $($item).slideToggle(400);
            $('img.go_up').hide();
        }
        return false;
    });
}); 