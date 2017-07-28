
/*------------------------------------*\\
  CONTENTS
\\*------------------------------------*/

/*
GENERAL   HTML, BODY, etc.
SHARED    Share anything we can across blocks.
HEADER
MAIN
  sub_block
  sub_block
FOOTER
NOTES
RESET
*/

// SMOOTH DIV SCROLL
// CAROUSEL
// COUNTER
// SLIDER
// COUNTDOWN
// FEATURES-EXPAND
// PARALLAX for tree

/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function($) {
  //  if($('body').is('.page-home')){
  //    var a = "initial_template";
  //  }
  // })(jQuery); // eof autoFunction
  /* eof ^^^ */





  /* отрабатывать
    ================================================ */
  // (function() {
  //   var a = "initial_template";
  // })(); // eof autoFunction
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  // $( document ).ready(function() {
  //   var a = "initial_template";
  // }); // eof .ready
  /* eof ^^^ */





  /* ================================================
     Блок_комментариев_для_раздела $ MAIN
     ================================================ */

  /* === eof $ MAIN == */

  /* Блок_комментариев_для_подраздела
     ================================================ */

  /*
   * Блок_комментариев_для_группы_правил.
   * Хорошо_подходит_для_подробных_пояснений_и_документации.
   */

  /* Обычный_комментарий */


// dropDown menu [!! jqueryEasing]
(function() {
    if($('.menu').is('#mainNavbar')){

      if ($(window).width() > 768) {
          $('.dropdown').mouseenter(
              function() {
                  clearTimeout($.data(this, 'timer'));

                  $(this).children('.submenu').stop(true, true).slideDown(200, 'easeInOutCubic');
                  $(this).addClass('active');
              }
          );
          $('.dropdown').mouseleave(
              function() {
                  $.data(this, 'timer', setTimeout($.proxy(function() {

                      $(this).children('.submenu').stop(true, true).slideUp(200, 'easeInOutCubic');
                      $(this).removeClass('active');
                  }, this), 200));

              }
          );
      }

    }

})();
// EOF dropDown menu

/* отрабатывать только для определенной страницы
  ================================================ */
(function($) {
  // if($('body').is('.page-index')){
    $('#phone').stop(true, true).mouseenter(function(){
      clearTimeout($.data(this, 'timer'));
      $('.user-block .phone-tooltip').fadeIn(500);
    });
    $('#phone').stop(true, true).mouseleave(function(){
      $.data(this, 'timer', setTimeout($.proxy(function() {

          $('.user-block .phone-tooltip').fadeOut(500);
      }, this), 500));

    });
  // }
})(jQuery); // eof autoFunction
/* eof ^^^ */


  // // if ((window.matchMedia("(min-width: 1024px)").matches)) {
  // if ($(window).width() > 1024) {
  //   // (function($) {
  //     $('#mainNavbar').flexMenu({
  //       linkText: 'Больше'
  //     });
  //
  //     $('.flexMenu-viewMore a').click(function() {
  //         $(this).toggleClass('opened');
  //     });
  //   // })(jQuery);
  // }



/* == eof $ MAIN == */



/* BURGER отрабатывать только для определенной страницы
	================================================ */
(function($) {

   if($('ul').is('.flex.menu')){

     // burger animation itself:
  	 $('#click').click(function() {
  			 $('#burger-content').stop(true, true).slideToggle(600);
  	 });

   }

})(jQuery); // eof autoFunction
/* eof ^^^ */

(function($) {

  if($('body').is('.page-catalog-oil')){

    var target;
    var cutText;
    var result;

    if ((window.matchMedia("(max-width: 1023px)").matches)) {

      target = $('.breadcrumbs-item .breadcrumbs-link:last');
      cutText = target.attr( "data-original" );
      result = start_and_end(cutText);
      target.html( result );

      function start_and_end(str) {
        if (str.length > 20) {
          return str.substr(0, 5) + '...' + str.substr(str.length-5, str.length);
        }
        return str;
      }

    }
    if ((window.matchMedia("(min-width: 1024px)").matches)) {

      target = $('.breadcrumbs-item .breadcrumbs-link:last');
      cutText = target.attr( "data-original" );
      result = start_and_end(cutText);
      target.html( result );

      function start_and_end(str) {
        if (str.length > 20) {
          return str.substr(0, 5) + '...' + str.substr(str.length-5, str.length);
        }
        return str;
      }

    }

  }

})(jQuery); // eof autoFunction




(function() {
  var contents = $('.item-content');
  var titles = $('.item-title');
  titles.on('click',function(){
    var title = $(this);
    contents.filter(':visible').slideUp(function(){
      $(this).parent('.item').removeClass('is-opened');
    });

    var content = title.next('.item-content');

    if (!content.is(':visible')) {
      content.slideDown(function(){title.parent('.item').addClass('is-opened')});
    }
  });
})(); // eof autoFunction




// filter for mobiles show-hide btn
$( document ).ready(function() {

  if ((window.matchMedia("(max-width: 1023px)").matches)) {

    $('#filter').click(function(){
      $( ".form-filter" ).show().animate({
        // 'margin-right': -$('.form-filter').width()/2
        'right': '0'
        // left: "+=50"
        // height: "toggle"
      });


      $('#filter').fadeOut(300);
      $('.js-filter-back').fadeIn(300);

      // _hide_/show another content:
        $('.right-col').hide();
        $('.viewed').hide();
        $('.filter-selected-params').hide();

    });



    $('.js-filter-back').click(function(){
      $( ".form-filter" ).animate({
        // 'margin-right': -$('.form-filter').width()/2
        'right': '-300px'
        // left: "+=50"
        // height: "toggle"
      }, 300, function() {
        // Animation complete.
      });
      setTimeout(function() {
        $( ".form-filter" ).hide();
        $( ".right-col" ).show();
      }, 300);


      $('#filter').fadeIn(300);
      // $('.form-filter').hide();
      $('.js-filter-back').fadeOut(300);


      // hide/_show_ another content:
        $('.right-col').show();
        $('.viewed').show();
        $('.filter-selected-params').show();
    });


  }

});
// eof filter for mobiles show-hide btn


// burger:





// modal REG tabs form

$(document).ready(function() {
  function tabsLoad() {
       $(".modal-reg .js-tabs-simple").each(function(){
         if ($(this).find(".active").length) {
            var index = $(this).find(".active").index();
         	$(this).next().find(".js-tabs-simple-content").eq(index).show();
         }
         else {
           $(this).find("li").eq(0).addClass("active");
           $(this).next().find(".js-tabs-simple-content").eq(0).show();
         }
       });
   }
   tabsLoad();
    $('.modal-reg .js-tabs-simple a').on("click",function () {
			var tabs = $(this).parents(".js-tabs-simple");
			var tabsCont = tabs.next().find(".js-tabs-simple-content");
			var index = $(this).parents('.tabs__item').index();
			tabs.find("li").removeClass("active");
      	$(this).parents('.tabs__item').addClass("active");
			tabsCont.hide();
			tabsCont.eq(index).show();
			return false;
    });
});


  // appear

    // login reg form

    /* .modal-content.modal-home
      ================================================ */
    (function($) {
      // if($('body').is('.page-index')){

        if($('section').is('.modal-reg')){
          showMainModal();

          // closeMainModal();

          hideMainOverlay();


          $('html body').on('keyup', function(e) {
            if (e.keyCode === 27) {
                $('.modal-reg').fadeOut(300);
                $('.modal-reg-overlay').fadeOut(300);
            }
          });
        }
      // }

      function showMainModal() {
          $('#login').click(function(event) {
              event.preventDefault();
              // $('.banner--clone .floating-burger-btn #click').attr('checked', false);
              // $('.banner--clone .floating-burger-essence').removeClass('opened');
              // $('.banner--clone .floating-burger-btn').removeClass("burger-active");
              // if ((window.matchMedia("(max-width: 1159px)").matches)) {
              //   $('.floating-burger-overlay').fadeOut(200, 'linear');
              // }

              $('.modal-reg').fadeIn(300);
              $('.modal-reg-overlay').fadeIn(300);
          });
      }

      // function closeMainModal() {
      //     $('.modal-content-close').click(function() {
      //         $('.modal-content').fadeOut(300);
      //         $('.modal-reg-overlay').fadeOut(300);
      //     });
      // }

      function hideMainOverlay() {
          $('.modal-reg-overlay').click(function() {
              $('.modal-reg').fadeOut(300);
              $('.modal-reg-overlay').fadeOut(300);
          });
      }
    })(jQuery); // eof autoFunction



    /* eof ^^^ */

    // eof login reg form

  // dissappear

  // recover tab-content

  $('#recover').on("click",function () {
    var tabLogin = $(this).parents(".js-tabs-simple-content.tab-login");
    var tabRecover = $('.js-tabs-simple-content.tab-recover');

    tabLogin.hide();
    tabRecover.show();

  });

  $('#remembered').on("click",function () {
    var tabRecover = $('.js-tabs-simple-content.tab-recover');
    var tabInstructions = $('.js-tabs-simple-content.tab-instructions');

    tabRecover.hide();
    tabInstructions.show();

  });

  // eof recover tab-content

// eof modal REG tabs form


/* change window text (window block)
	================================================ */

  (function($) {

    // if($('section').is('.modal-reg')){

      if($('section').is('.modal-reg')){
        //  new machMedia resizer; the fastest one
        //  change text on resize event.
        var mq  = window.matchMedia( '(max-width: 1001px)' );
        mq.addListener(function(mq) {
           if (mq.matches) {
             change2newString();
           } else {
             change2originString();
           }
        });

        // instant change text on mobile-tablet hw.
        if ($(window).width() < 1160) {
            change2newString();
        }
      }
    // }
  })(jQuery); // eof autoFunction




  function change2newString(){
    var string = 'Вход';
    $('.tab-login .tabs-btn-text').text(string);
  }
  function change2originString(){
    var origin = 'Вход в кабинет';
    $('.tab-login .tabs-btn-text').text(origin);
  }
/* eof ^^^ */
