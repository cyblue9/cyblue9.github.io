$(function () {
    var secArr = new Array();
    var current = -1;
    var secColor = new Array(new Array('#333333', '#FFF', '1.0'), new Array('#FFF', '#322e40', '0.8'), new Array('#333333', '#FFF', '1.0'));
    secArr[0] = $('#career').offset().top - 20;
    secArr[1] = $('#award').offset().top - 70;
    secArr[2] = $('#media').offset().top - 150;

    function chengeBG(secNum) {
        if (secNum != current) {
            current = secNum;
            $('.section-bg').css({ "color" : secColor[current][0],
                                   "background" : secColor[current][1],
                                   "opacity" : secColor[current][2] });
            $('#award a').css({ "color": secColor[current][0] });
            $('#media a').css({ "color": secColor[current][0] });
        }
    }
    $(window).on('load scroll resize', function () {
        for (var i = secArr.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() > secArr[i]) {
                chengeBG(i);
                break;
            }
        }
    });
});
