if($('.menu').is('#mainNavbar')){

  $(document).ready(function() {
    function tabsLoad() {
         $("#mainNavbar .js-tabs-simple").each(function(){
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


      $('#mainNavbar .js-tabs-simple a').on("click",function () {
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

}
