//owl carousel
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

//team menu
function teamAcco(){
  $('.team-accordeon').on('click', function(e){
      e.preventDefault()
    
      var elem = $(e.target),
          item = elem.parent();

      items = item.siblings();

      if(!item.hasClass('active')){
          item.addClass('active');
          items.removeClass('active');

      }
      else{
          item.removeClass('active');
      }    

      
    
    
  })
};
teamAcco();