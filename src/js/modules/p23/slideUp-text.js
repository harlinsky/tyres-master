$( document ).ready(function() {

  if ((window.matchMedia("(min-width: 1024px)").matches)) {

    if($('body').is('.page-cab')){

      var contents = $('.profile-content');
      var titles = $('.profile-title');


      titles.on('click',function(){
        var title = $(this);
        contents.filter(':visible').slideUp(function(){
          $(this).parent('.profile').removeClass('is-opened');
        });

        var content = title.next('.profile-content');

        if (!content.is(':visible')) {
          content.slideDown(function(){title.parent('.profile').addClass('is-opened')});
        }
      });

    }

  }



});
