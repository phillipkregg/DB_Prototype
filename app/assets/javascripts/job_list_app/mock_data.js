

var Jobs = {}

Jobs.jobList = [
	{ 
		id: 1,
		last_name: "Bauer",
		first_name: "Jack",
		loss_city: "Hartford",
		job_type: "Water",
		
		zones: [
			{
				zone_id: 1,
				zone_name: "First Zone",
				width: 300,
				height: 300,
				
				rooms: [
					{ 
						room_id: 1,
				  		room_name: "Kitchen",
				  		width: 100,
						height: 50				
				   },
				   { 
				   	room_id: 2,
				  		room_name: "Bathroom",
				  		width: 100,
						height: 50				
				   },
				   { 
				   	room_id: 3,
				  		room_name: "Dining Room",
				  		width: 100,
						height: 50				
				   }
				]
				
			},
			
			{
				zone_id: 2,
				zone_name: "Second Zone",
				width: 300,
				height: 300,
				
				rooms: [
					{ 
						room_id: 4,
				  		room_name: "Den",
				  		width: 100,
						height: 50				
				   },
				   { 
				   	room_id: 5,
				  		room_name: "Garage",
				  		width: 100,
						height: 50				
				   }
				  
				]
				
			},
			
			
			
		]		
	},
	
	{ 
		id: 2,
		last_name: "Jolie",
		first_name: "Angelina",
		loss_city: "Nashville",
		job_type: "Water"
	},
	
	{ 
		id: 3,
		last_name: "Johansen",
		first_name: "Scarlett",
		loss_city: "New York",
		job_type: "Water"
	},
	
	{ 
		id: 4,
		last_name: "Stone",
		first_name: "Emma",
		loss_city: "Chicago",
		job_type: "Fire"
	},
	
	{ 
		id: 5,
		last_name: "Downey Jr.",
		first_name: "Robert",
		loss_city: "Springfield",
		job_type: "Water"
	}
	
];
