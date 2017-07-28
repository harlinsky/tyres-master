/* .modal-content.modal-home
  ================================================ */
(function($) {
  // if($('body').is('.page-index')){

    if($('section').is('.popup')){
      showMainModal();

      closeMainModal();

      hideMainOverlay();


      $('html body').on('keyup', function(e) {
        if (e.keyCode === 27) {
            $('.popup').fadeOut(300);
            $('.popup-overlay').fadeOut(300);
        }
      });
    }
  // }
})(jQuery); // eof autoFunction

function showMainModal() {
    $('#login').click(function(event) {
        event.preventDefault();
        // $('.banner--clone .floating-burger-btn #click').attr('checked', false);
        // $('.banner--clone .floating-burger-essence').removeClass('opened');
        // $('.banner--clone .floating-burger-btn').removeClass("burger-active");
        // if ((window.matchMedia("(max-width: 1159px)").matches)) {
        //   $('.floating-burger-overlay').fadeOut(200, 'linear');
        // }

        $('.popup').fadeIn(300);
        $('.popup-overlay').fadeIn(300);
    });
}

function closeMainModal() {
    $('.popup .close').click(function() {
        $('.popup').fadeOut(300);
        $('.popup-overlay').fadeOut(300);
    });
}

function hideMainOverlay() {
    $('.popup-overlay').click(function() {
        $('.popup').fadeOut(300);
        $('.popup-overlay').fadeOut(300);
    });
}

/* eof ^^^ */

// eof login reg form
