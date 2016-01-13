$(document).ready(function(){

    footerToBottom();
    fixedHeader();

    $('#mapButton').click(function(){
        $('#map').slideToggle(500);
    });
});

function footerToBottom() {
    var footerHeight = $('#footer').outerHeight();

    $('#page-wrapper').css('margin-bottom', '-' + footerHeight + 'px');
    $('#page-buffer').css('height', footerHeight + 'px');
}

function fixedHeader() {
    var headerHeight = $('#header').outerHeight();

    $('#section').css('padding-top', headerHeight + 'px');
}