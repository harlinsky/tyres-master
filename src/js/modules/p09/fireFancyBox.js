


  if($('body').is('.page-question')){

    $(document).ready(function() {

      $("a.article-content__img").fancybox({
        // 'transitionIn'	:	'elastic',
        // 'transitionOut'	:	'elastic',
        // 'speedIn'		:	600,
        // 'speedOut'		:	200,
        // 'overlayShow'	:	false
        helpers: {
           overlay: {
             locked: false
           }
         }
      });

    });

  }
