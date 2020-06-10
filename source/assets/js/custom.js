console.log('js all');

$(function () {
  console.log('jquery run');
    
  /* c-visionNav 
  -------------------------------------------------- */
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
  /* End of c-visionNav 
  -------------------------------------------------- */
  
  
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

  
  /* productSlideSwiper
  -------------------------------------------------- */
  var productSlideSwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,
    },
    speed: 2000,
    slidesPerView: 'auto',
  })
  /* End of productSlideSwiper
  -------------------------------------------------- */
  

  /* product-masonry
  -------------------------------------------------- */
  /**
   ** 參考來源：
   * Bootstrap教學－「Bootstrap+Masonry」讓網格系統也支援瀑布流排版 - https://www.minwt.com/webdesign-dev/html/16943.html
   * masonry JavaScript & jQuery - https://masonry.desandro.com/
   */
  $('.js-masonry-productList').masonry({
    itemSelector: '.js-masonry-productList__item',
    horizontalOrder: true // 排序由右至左後在由上至下
  });
  /* End of product-masonry
  -------------------------------------------------- */


  /* checkout-1.html page "Return to cart" btn click to "product.html" page call ID show model
  -------------------------------------------------- */
  var url = location.href;
  var urlSplitLen = url.split('?').length;
  if (urlSplitLen > 1) {
    if (url.split('?')[1].split('=').length > 1) {
      console.log(url.split('?')[1].split('='));
      var modalIDname = url.split('?')[1].split('=')[0];
      var modalIDvalue = url.split('?')[1].split('=')[1];
      switch (modalIDname){
        case 'modalID':
          $( '#'+ modalIDvalue).modal('show');
        break;
      }
    }
  }  
  /* End of checkout-1.html page "Return to cart" btn click to "product.html" page call ID show model
  -------------------------------------------------- */
  
});
