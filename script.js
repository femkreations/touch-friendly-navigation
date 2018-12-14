// JavaScript Document


$(document).ready(function() {
				
	/* FP $('.facetchild').fadeIn(1000); FP */
	/* 	$('.unchecked').hide(); */	
	/* FP 
	$('.showFacet').stop().show();
	$('.facetParent').click(function() {
		$(this).find('.unchecked').stop().toggle();
	});	
	FP */

	
	/* FP
	$('#up-morefacetslnk').click(function() {
		$(this).html('Less refinements...');
		$('.up-facetToHide').toggle();

	});
	*/
});//end document ready



$(document).ready(function () {
	
	
	$(".facetParent > a").on("mousedown touchstart", function(e){
        if(!$(this).hasClass("active")) {
        	// hide any open menus and remove all other classes
        	e.preventDefault();
            $(".facetParent div").slideUp(300);
            $(".facetParent a").removeClass("active");

            // open our new menu and add the open class
            $(this).next("div").slideDown(300);
            $(this).addClass("active");
        }

        else if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next("div").slideUp(300);

           
        }
    });  
	
	/*
	$('.facetParent > a').click(function(){
	    if ($(this).attr('class') != 'active'){
	      $('.facetParent div').slideUp();
	      $(this).next().slideToggle();
	      $('.facetParent a').removeClass('active');
	      $(this).addClass('active');
	    }
	  }); */ 
	});





$(document).ready(function() {
				
	/* FP $('.facetchild').fadeIn(1000); FP */
	/* 	$('.unchecked').hide(); */	
	/* FP 
	$('.showFacet').stop().show();
	$('.facetParent').click(function() {
		$(this).find('.unchecked').stop().toggle();
	});	
	FP */

	$('.facetchild').change(function() {
		var values = $('input:checkbox:checked.facetCheckBox').map(function() {
							return this.value || "";
						}).get();
		$('#checkedFacets').val(values);
		$('#searchFormWidgetCommand').submit();
	}); //change in media type
	
	/* FP
	$('#up-morefacetslnk').click(function() {
		$(this).html('Less refinements...');
		$('.up-facetToHide').toggle();

	});
	*/
});//end document ready
