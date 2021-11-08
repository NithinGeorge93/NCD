$(document).ready(function () {

    $('.round-logo').click((e) => {
        var $this = $(e.currentTarget);

        $('.section-box').toggleClass('expanded', 2000);
    });
});