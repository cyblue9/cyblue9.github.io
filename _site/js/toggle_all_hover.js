$(function () {
    $('.all_hover_toggle').on('click', function () {
        var cache = $('#portfolio-work .block .portfolio-contant ul li');
        $(cache).each(function () {
            $(this).toggleClass('hover');
        });
    });
})
