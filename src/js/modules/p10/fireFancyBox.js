

  if($('body').is('.page-about-us')){

    $(document).ready(function() {

      $("a.article-content__img, .left-img").fancybox({
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
