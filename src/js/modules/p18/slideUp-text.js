$( document ).ready(function() {

	if($('body').is('.page-check-second')){

    console.log('works2');

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

});
