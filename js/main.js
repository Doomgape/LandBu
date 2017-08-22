$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      responsive: {
        0 : {
            items : 1,
            nav : true,
            loop : true,
            navText : ['','']
        }
      }
    });

    $('#fullpage').fullpage({
      verticalCentered: false
    });
});