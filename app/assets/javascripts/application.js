// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui-1.9.0.custom.js
//= require bootstrap
//= require bootstrap-combobox

//= require angular
//= require angular-resource
//= require angular-ui
//= require_tree ./job_list_app
//= require_tree ./job_list_app/templates
//= require_self

$(document).ready(function() {
	
		
	
	
	$("#job_list_table tbody tr").live("mouseenter", function(e) {  
			$(this).toggleClass("green_row");
			$(this).siblings().removeClass("green_row");			   

	});
	
	$("#job_list_table tbody").live("mouseleave", function(e) { 			
			$(this).children().removeClass("green_row");			   

	});
	
	
	//********* Rooms - Zones drag and drop
	
	$(".room_box").draggable();
	
	
	
	
});
	
	



