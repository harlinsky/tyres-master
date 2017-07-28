// page-window-systems COLORS slider

$( document ).ready(function() {

  if ((window.matchMedia("(min-width: 1600px)").matches)) {
    if($('body').is('.page-product')){
      $("ul#viewed").bxSlider({
          speed: 300,
          nextText: '',
          prevText: '',
          slideWidth: 270,
          minSlides: 4,
          maxSlides: 4,
          moveSlides: 1,
          slideMargin: 30,
          pager: false,
          prevSelector: ('.viewed-controls__left'),
          nextSelector: ('.viewed-controls__right')
          //  onSlideBefore:function($slideElement, oldIndex, newIndex){
          //    changeRealThumb(realThumbSlider,newIndex);
          //
          //  }
      });
    }
  }

  if ((window.matchMedia("(min-width: 1024px)").matches)
      && (window.matchMedia("(max-width: 1599px)").matches)) {
    if($('body').is('.page-product')){
      $("ul#viewed").bxSlider({
          speed: 300,
          nextText: '',
          prevText: '',
          slideWidth: 270,
          minSlides: 2,
          maxSlides: 2,
          moveSlides: 1,
          slideMargin: 30,
          pager: false,
          prevSelector: ('.viewed-controls__left'),
          nextSelector: ('.viewed-controls__right')
          //  onSlideBefore:function($slideElement, oldIndex, newIndex){
          //    changeRealThumb(realThumbSlider,newIndex);
          //
          //  }
      });
    }
  }


  if ((window.matchMedia("(max-width: 1023px)").matches)) {
    if($('body').is('.page-product')){
      $("ul#viewed-min").bxSlider({
          speed: 300,
          nextText: '',
          prevText: '',
          infiniteLoop: true,
          slideWidth: 270,
          minSlides: 1,
          maxSlides: 1,
          moveSlides: 1,
          // slideMargin: 30,
          pager: false,
          prevSelector: ('.viewed-controls__left'),
          nextSelector: ('.viewed-controls__right')
          //  onSlideBefore:function($slideElement, oldIndex, newIndex){
          //    changeRealThumb(realThumbSlider,newIndex);
          //
          //  }
      });
    }
  }


}); // eof .ready

// page-window-systems COLORS slider END
