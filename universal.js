 $(".column1").hide();
 $(".column2").hide();
 $(".column3").hide();
 $(".description").hide();
  $("body").click(function() {
  	       $(".bela-gif").remove();
		   $(".description").fadeIn(1500);
		   $(".column1").fadeIn(2500);
		   $(".column2").fadeIn(3500);
		   $(".column3").fadeIn(4500);
		   });