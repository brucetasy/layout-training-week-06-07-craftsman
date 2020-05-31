console.log('js all');

$(function () {
  console.log('jquery run');
  // $('.js-call-coverPanel').click( function (e) {
  //   e.preventDefault();
  //   // console.log('.js-call-coverPanel on click');
  //   $(".js-coverPanel-section").addClass('active');
  // });
  // $('.js-close-coverPanel').click( function (e) {
  //   e.preventDefault();
  //   $(".js-coverPanel-section").removeClass('active');
  // });

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


