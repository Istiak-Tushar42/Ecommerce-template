/*** ddSlick JS */
// $('#slick').ddslick({
//     defaultSelectedIndex:2,
// }); // ddSlick JS END


/*** niceSelect JS */
$(document).ready(function() {
    $('select').niceSelect();
}); // niceSelect JS END

// BOOTSTRAP 4 TOOLTIP
$(function () {
    $('button').tooltip();
});

/*** OWL-CAROUSEL INIT */
$('.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        1000:{
            items: 4
        }
    }
});