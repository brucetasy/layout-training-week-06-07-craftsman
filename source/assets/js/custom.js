console.log('js all');

$(function () {
  console.log('jquery run');
  
  // var winHeight = $(window).height();
  // console.log('winHeight', winHeight);
  $(window).scroll(function () {
    // console.log('$(this).scrollTop()', $(this).scrollTop());
    if ($(this).scrollTop() > 80) {
      $('.js-c-visionNav').removeClass('c-visionNav');
    } else {
      $('.js-c-visionNav').addClass('c-visionNav');
    }
  });

  /* Fixed scrollable c-sidebar menu with a content overlay
  -------------------------------------------------- */
  $('.js-dismiss, .c-sidebarOverlay').on('click', function (e) {
    console.log('js-dismiss, .overlay click');
    e.preventDefault();
    // hide c-sidebar
    $('.js-c-sidebar').removeClass('js-active');
    // hide c-sidebarOverlay
    $('.c-sidebarOverlay').removeClass('js-active');
  });

  $('.js-c-sidebarCollapse').on('click', function (e) {
    console.log('.js-c-sidebarCollapse click');
    e.preventDefault();
    // open c-sidebar
    $('.js-c-sidebar').addClass('js-active');
    // fade in the c-sidebarOverlay
    $('.c-sidebarOverlay').addClass('js-active');
  });
  /* End of Fixed scrollable c-sidebar menu with a content overlay
  -------------------------------------------------- */
})


