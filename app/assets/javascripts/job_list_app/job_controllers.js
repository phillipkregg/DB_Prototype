
function JobListController($scope, $location) {
		
	$scope.jobs = Jobs.jobList;	
	var job = "";
	
		
	
		
	
}

JobListController.$inject = ['$scope', '$location'];





function JobDetailController($scope, $routeParams) {
		
	var job = Jobs.jobList[$routeParams.jobId - 1];
		
	$scope.job = job;	
	$scope.areZones = false;
	$scope.isCallerInfo = false;
	
	
	
	if (job.contact_information) {
		if (job.contact_information.caller) {
			$scope.isCallerInfo = true;
		}
		var caller = job.contact_information.caller;	
		var customer = job.contact_information.customer;	
		var occupant = job.contact_information.occupant;	
		var loss = job.contact_information.loss;	
	
	
	
		var zones = job.zones;
		
		//*** INITIALIZE MAIN OBJECTS		
		$scope.caller  = caller;	
		$scope.customer = customer;
		$scope.occupant = occupant;
		$scope.loss = loss;
		
			
	}
		
		//*** Caller Object
		
		//$scope.callerFirstName = $scope.caller.first_name;
		
		
		//*** Loss Address Object
		//$scope.loss = loss;
		
		//*** Editable Boolean
		$scope.isCallerEditable = false;
		
		//*** Caller edit actions
		$scope.editCaller = function() {
			$scope.isCallerEditable = true;
			$("#caller_edit").show( 'drop', 200 );
		}
		$scope.cancelCallerEdits = function() {
			$scope.isCallerEditable = false;
			$("#caller_view").show( 'drop', 200 );
		}
		$scope.saveCallerEdits = function() {
			$scope.caller.first_name = $scope.callerFirstName;
			$scope.isCallerEditable = false;
		}
			
		//*** Customer edit actions
		//$scope.customer = job.contact_information.customer;
		$scope.isCustomerEditable = false;
		$scope.editCustomer = function() {
			$scope.isCustomerEditable = true;		
			$("#customer_edit").show( 'drop', 200 );
		}
		$scope.cancelCustomerEdits = function() {
			$scope.isCustomerEditable = false;
			$("#customer_view").show( 'drop', 200 );
		}
		$scope.saveCustomerEdits = function() {
			$scope.isCustomerEditable = false;
			
		}
		
		
		//*** Occupant edit actions
		
		//$scope.occupant = job.contact_information.occupant;
		$scope.isOccupantEditable = false;
		
		$scope.editOccupant = function() {
			$scope.isOccupantEditable = true;		
			$("#occupant_edit").show( 'drop', 200 );
			$('html, body').animate({ 
		      scrollTop: $('#occupant_edit').offset().top 
		 		}, 200);
		}
		
		$scope.cancelOccupantEdits = function() {
			$scope.isOccupantEditable = false;
			$("#occupant_view").show( 'drop', 200 );
		}
		
		$scope.saveOccupantEdits = function() {
			$scope.isOccupantEditable = false;
			
		}
		
		
		
		
		
		//*** Loss Address edit actions
		$scope.isLossAddressEditable = false;
		
		$scope.editLossAddress = function() {
			$scope.isLossAddressEditable = true;		
			$("#loss_address_edit").show( 'drop', 200 );
			$('html, body').animate({ 
		      scrollTop: $('#loss_address_edit').offset().top 
		 		}, 200);
		}
		
		$scope.cancelLossAddressEdits = function() {
			$scope.isLossAddressEditable = false;
			$("#loss_address_view").show( 'drop', 200 );
		}
		$scope.saveLossAddressEdits = function() {
			$scope.isLossAddressEditable = false;
			
		}
		
		
		
		
		if (job.zones) {
			$scope.areZones = true;
			$scope.zones = job.zones;	
			$scope.zone = $scope.zones[$routeParams.zoneId - 1];
		}	
		
		if ($scope.zone) {
			$scope.rooms = $scope.zone.rooms;
			$scope.room = $scope.rooms[$routeParams.roomId - 1];
		}
		
		//**** FNOL Contact Info
	
		
	
}

JobDetailController.$inject = ['$scope', '$routeParams'];







function ZonesRoomsController($scope, $routeParams) {
				
		var job = Jobs.jobList[$routeParams.jobId - 1];
	
		$scope.job = job;		
					
		
		var zones = job.zones;	
		
		$scope.zones = job.zones;
		$scope.zone = $scope.zones[$routeParams.zoneId - 1];
		
		var rooms = [];
		
		//console.log($scope.zones.length)
		
		if (zones) {
			// Get All rooms in every zone
			for (var i=0; i < zones.length; i++) {				
				for (var j=0; j < zones[i].rooms.length; j++){
					rooms.push(zones[i].rooms[j])
				}
			}
			
			//**** Get Individual rooms per zone - instead of all rooms
			// if (job.zones) {
				// $scope.zones = job.zones;	
				// $scope.zone = $scope.zones[$routeParams.zoneId - 1]; 				
				// for(var i=0; i < $scope.zones.length; i++) {
					// $scope.rooms = $scope.zones[i].rooms;
				// } 				
			// }
			
			
			// set room scope to ALL rooms
			$scope.rooms = rooms;
			$scope.room = $scope.rooms[$routeParams.roomId - 1];		
			
			
			//****** EQUIPMENT LIST			
			
			var equipment = [];	
			$scope.equipment = equipment;	
			
			//**** Get ALL equipment in EVERY room
			for ( var i=0; i < rooms.length; i++) {	
				if(rooms[i].equipment) {
					for ( var e=0; e < rooms[i].equipment.length; e++){						
						equipment.push($scope.rooms[i].equipment[e]);
					}
				}	
			}
			
			
			if($scope.room) {						
				$scope.gotEquipment = false;	
				
				$scope.selectedEquipment = 1;
						
				if($scope.room.equipment) {
					//****** SELECTED EQUIPMENT		
					$scope.gotEquipment = true;																
					
					if($routeParams.equipmentId) {
						$scope.selectedEquipment = $scope.equipment[$routeParams.equipmentId - 1];						
					}				
				} 		
			}		
			
			
			
		}		
}


ZonesRoomsController.$inject = ['$scope', '$routeParams'];






















