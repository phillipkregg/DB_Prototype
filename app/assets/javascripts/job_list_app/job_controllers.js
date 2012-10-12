
function JobListController($scope, $location) {
		
	$scope.jobs = Jobs.jobList;	
	
	$scope.clickTest = function() {
		alert('howdy');
	}
	
}


function JobDetailController($scope, $routeParams) {
	
	var job = Jobs.jobList[$routeParams.jobId - 1];
	
	$scope.job = job;	
	
	if (job.zones) {
		$scope.zones = job.zones;	
		$scope.zone = $scope.zones[$routeParams.zoneId - 1];
	}
	
	
	
	if ($scope.zone) {
		$scope.rooms = $scope.zone.rooms;
		$scope.room = $scope.rooms[$routeParams.roomId - 1];
	}
			
	
}


function ZonesRoomsController($scope, $routeParams) {
				
		var job = Jobs.jobList[$routeParams.jobId - 1];
	
		$scope.job = job;	
		
		
		var zones = job.zones;	
		var rooms = [];
		
		//console.log($scope.zones.length)
		
		if (zones) {
			// for (var i=0; i < zones.length; i++) {				
				// for (var j=0; j < zones[i].rooms.length; j++){
					// rooms.push(zones[i].rooms[j])
				// }
			// }
			
			

			//$scope.rooms = rooms;
			
			if (job.zones) {
				$scope.zones = job.zones;	
				$scope.zone = $scope.zones[$routeParams.zoneId - 1];
				
				for(var i=0; i < $scope.zones.length; i++) {
					$scope.rooms = $scope.zones[i].rooms;
				}
				
			}
			
			
			
			if ($scope.zone) {
				$scope.rooms = $scope.zone.rooms;
				$scope.room = $scope.rooms[$routeParams.roomId - 1];
			}
			
			
			
			
		}
		
}









