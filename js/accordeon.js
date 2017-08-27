
$(function () {
  $('.menu-accordeon__item').on('click', function (e) {
    e.preventDefault()

    var elem = $(e.target),
      item = elem.closest('.menu-accordeon__item'),
      content = item.find('.menu-accordeon__item'),
      reqHeight = item.find('.menu-accordeon__item').outerHeight(),
      items = item.siblings(),
      otherContent = items.find('.menu-accordeon__item');

    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');

      otherContent.css({
        'height': 0
      });

      content.css({
        'height': reqHeight
      })
    } else {
      item.removeClass('active')
      content.css({
        'height': 0
      })
    }
  })
});