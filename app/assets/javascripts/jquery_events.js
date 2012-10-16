$(document).ready(function() {
	
		
	
	
	$("#job_list_table tbody tr").live("mouseenter", function(e) {  
			$(this).toggleClass("green_row");
			$(this).siblings().removeClass("green_row");			   

	});
	
	$("#job_list_table tbody").live("mouseleave", function(e) { 			
			$(this).children().removeClass("green_row");			   

	});
	
		
	
	
	
		
	//********  Room Mouseover Effects
	
		
	$(".room_box").live('mouseenter', function() {			
			$(this).tween({			
				opacity:{
		      start: 100,
		      stop: 80,
		      time: 0,
		      duration: .2,
		      effect:'easeInOut'			  
			   },
			   shadow:{
			      start: '0px 0px 0px #000',
			      stop: '10px 10px 30px #000',
			      time: 0,
			      duration: .2,
			      effect:'easeInOut'
			   }		   
		   
			}).play();
		});
		
		$(".room_box").live('mouseleave', function() {			
			$(this).tween({
				opacity:{
			      start: 80,
			      stop: 100,
			      time: 0,
			      duration: .2,
			      effect:'easeInOut'			  
				},
		   
			   shadow:{
			      start: '10px 10px 30px #000',
			      stop: '0px 0px 0px #000',
			      time: 0,
			      duration: .2,
			      effect:'easeInOut'
			   }
		   
			}).play();
		});
	
	
	
	
	
	
	
	
	
	
	
		
	
	
});