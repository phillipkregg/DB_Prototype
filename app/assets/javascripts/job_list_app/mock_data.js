

var Jobs = {}

Jobs.jobList = [
	{ 
		id: 1,
		last_name: "Bauer",
		first_name: "Jack",
		loss_city: "Hartford",
		job_type: "Water",
		insurance_company: "State Farm",
		age: "15 days",
		loss_date: "10/10/2012",
		claim_number: "123456789",
		job_status: "Active",
		dispatch_status: "Submitted",
		caller: "Jack Bauer",
		occupant: "Jack Bauer",
		production_manager: "Harold Potter",
		
		contact_information: {
				caller:	{
						last_name: "Bauer",
						first_name: "Jack",
						company_name: "Some Company",
						phone_numbers:	{
								primary: "555-123-4567",
								cell: "555-987-5432"
							},
						
						address: "1600 Culture Shock Blvd.",
						city: "Phonix",
						state: "Arizona",
						zip: "12345",
						email: "jackb@fakemail.com"										
					},
				
				customer: {
						last_name: "Bauer",
						first_name: "Jack",
						company_name: "Some Company",
						phone_numbers: {
								primary: "555-123-4567",
								cell: "555-987-5432"
							},
						
						address: "1600 Culture Shock Blvd.",
						city: "Phonix",
						state: "AZ",
						zip: "12345",
						email: "jackb@fakemail.com"										
					},
				
				occupant: {
						last_name: "Bauer",
						first_name: "Jack",
						company_name: "Some Company",
						phone_numbers: {
								primary: "555-123-4567",
								cell: "555-987-5432"
							},
						
						address: "1600 Culture Shock Blvd.",
						city: "Phonix",
						state: "Arizona",
						zip: "12345",
						email: "jackb@fakemail.com"										
					},
				
				loss_address:	{
						address1: "1200 Main Ave.",
						address2: "Apt 1408",
						zip: "54321",
						city: "Hartford",
						state: "CT",
						directions: "Turn left at so and so drive..."									
					}	
				
							
			},
		
		
		
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
						height: 50,
												
						equipment: [
							{
								equipment_id: 1,
								type: "Dehumidifier",
								model: "#123456",
								image: "/assets/dehu.png"								
							},
							{
								equipment_id: 2,
								type: "Dehumidifier",
								model: "#654321",
								image: "/assets/dehu.png"									
							},
							{
								equipment_id: 3,
								type: "Air Mover",
								model: "#7565432",
								image: "/assets/air_mover.png"									
							}				
						
						] 
									
				   },
				   { 
				   	room_id: 2,
				  		room_name: "Bathroom",
				  		width: 100,
						height: 50,		
						
						equipment: [
							{
								equipment_id: 4,
								type: "Air Mover",
								model: "#ac300404",
								image: "/assets/air_mover.png"									
							},
							{
								equipment_id: 5,
								type: "Air Mover",
								model: "#ac9484530",
								image: "/assets/air_mover.png"									
							}							
						
						] 
								
				   },
				   { 
				   	room_id: 3,
				  		room_name: "Dining Room",
				  		width: 100,
						height: 50,		
						
						equipment: [
							{
								equipment_id: 6,
								type: "Air Mover",
								model: "#ac300404",
								image: "/assets/air_mover.png"									
							},
							{
								equipment_id: 7,
								type: "Air Mover",
								model: "#ac9484530",
								image: "/assets/air_mover.png"									
							},
							{
								equipment_id: 8,
								type: "Dehumidifier",
								model: "#dh9874560",
								image: "/assets/dehu.png"									
							},
							{
								equipment_id: 9,
								type: "Dehumidifier",
								model: "#dh00679990",
								image: "/assets/dehu.png"								
							}											
						
						] 
								
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
				   },
				   { 
				   	room_id: 6,
				  		room_name: "Game Room",
				  		width: 100,
						height: 50				
				   }
				   
				  
				]
				
			},
			{
				zone_id: 3,
				zone_name: "Third Zone",
				width: 300,
				height: 300,
				
				rooms: [
					{ 
						room_id: 7,
				  		room_name: "Patio",
				  		width: 100,
						height: 50				
				   }				   
				  
				]
				
			}			
			
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
