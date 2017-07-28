
/* smooth scrolling from nav menu */
$(document).ready(function(){

	$(".maps-content a.unit[href^='#']").click(function(){
			$("html, body").animate({
					// scrollTop: $( $.attr(this, "href") ).offset().top-50
					scrollTop: $( $.attr(this, "href") ).offset().top
			}, 500);
			return false;
	});

});
/* /smooth scrolling from nav menu */
