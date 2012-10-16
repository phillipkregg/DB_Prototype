
angular.module('job_list_app', ['ui', 'components']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when("/", { controller: JobListController, templateUrl: 'assets/job_list_app/templates/job_list.html' }).
			when("/job/new", { controller: JobListController, templateUrl: 'assets/job_list_app/templates/new_job.html'}).
			//when("/job/:jobId", { controller: JobDetailController, templateUrl: 'assets/job_list_app/templates/job_edit.html' }).
			when("/job/:jobId/fnol", { controller: JobDetailController, templateUrl: 'assets/job_list_app/templates/fnol.html' }).
			when("/job/:jobId/zones", { controller: JobDetailController, templateUrl: 'assets/job_list_app/templates/zones.html' }).			
			when("/job/:jobId/zones/:zoneId", { controller: JobDetailController, templateUrl: 'assets/job_list_app/templates/zone_edit.html' }).
			when("/job/:jobId/initial_inspection", { controller: JobDetailController, templateUrl: 'assets/job_list_app/templates/initial_inspection.html' }).
			when("/job/:jobId/zones/:zoneId/rooms/:roomId", { controller: ZonesRoomsController, templateUrl: 'assets/job_list_app/templates/room_edit.html' })
			
		
	}]);



