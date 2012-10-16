
function JobListController($scope, $location) {
		
	$scope.jobs = Jobs.jobList;	
		
	
}

JobListController.$inject = ['$scope', '$location'];





function JobDetailController($scope, $routeParams) {
		
	var job = Jobs.jobList[$routeParams.jobId - 1];
		
	$scope.job = job;	
	var zones = job.zones;
	
	$scope.caller  = job.contact_information.caller;	
	$scope.isCallerEditable = false;
	
	//*** Caller edit actions
	$scope.editCaller = function() {
		$scope.isCallerEditable = true;
	}
	$scope.cancelCallerEdits = function() {
		$scope.isCallerEditable = false;
	}
	$scope.saveCallerEdits = function() {
		$scope.isCallerEditable = false;
	}
		
	//*** Customer edit actions
	$scope.customer = job.contact_information.customer;
	$scope.isCustomerEditable = false;
	$scope.editCustomer = function() {
		$scope.isCustomerEditable = true;
	}
	$scope.cancelCustomerEdits = function() {
		$scope.isCustomerEditable = false;
	}
	$scope.saveCustomerEdits = function() {
		$scope.isCustomerEditable = false;
	}
	
	
	$scope.occupant = job.contact_information.occupant;
	
	if (job.zones) {
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
			// set room scope to ALL rooms
			$scope.rooms = rooms;
			$scope.room = $scope.rooms[$routeParams.roomId - 1];		
			
			
			//**** Get Individual rooms per zone - instead of all rooms
			// if (job.zones) {
				// $scope.zones = job.zones;	
				// $scope.zone = $scope.zones[$routeParams.zoneId - 1];
// 				
				// for(var i=0; i < $scope.zones.length; i++) {
					// $scope.rooms = $scope.zones[i].rooms;
				// }
// 				
			// }
			
						
			
			
		}
		
}


ZonesRoomsController.$inject = ['$scope', '$routeParams'];






