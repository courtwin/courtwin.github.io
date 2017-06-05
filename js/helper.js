function fullScreen(elem) {
    $fullElem = $(elem);
    /*
    */
    $fullElem.css({
        // 'background' : 'url("/images/home-bkg.jpg") no-repeat center center fixed',
        // 'background-size' : 'cover',
        // 'background-position': 'center',
        // 'background-repeat': 'no-repeat',
    });
    $fullElem.height($(window).height());
    $fullElem.width($(window).width());
}

function adjustCenter(elem, top, left) {
    if (typeof top == 'undefined' || top === null || top == '' || top < 0) {
        top = '50%';
    } else {
        top = top + '%';
    }
    if (typeof left == 'undefined' || left === null || left == '' || left < 0) {
        left = '50%';
    } else {
        left = left + '%';
    }
    // alert("top, left: " + top + " " + left);
    $centerElem = $(elem);
    $centerElem.css({
        'position' : 'absolute',
        'left': left,
        'top': top,
        'margin-left' : -$centerElem.outerWidth() / 2,
        'margin-top' : -$centerElem.outerHeight() / 2,
    });
}

function pageLoad(page, element) {
    content_div = document.getElementById(element);
    $(content_div).load(page);
}