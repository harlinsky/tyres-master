


  if($('body').is('.page-services-item')){

    $(document).ready(function() {

      $("a.item-img").fancybox({
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
