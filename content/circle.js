var current_h = null;
var current_w = null;

$('.resize').hover(
    function(){
        current_h = $(this, 'img')[0].height;
        current_w = $(this, 'img')[0].width;
        $(this).animate({width: (current_w * 3), height: (current_h * 3)}, 300);
    },
    function(){
        $(this).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
    }
);