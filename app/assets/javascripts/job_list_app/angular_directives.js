
angular.module('components', [])
	.directive('helloWorld', function() {
		return {
			restrict: 'E',
			scope: {
				current: '=current'
			},
			
			controller: function($scope){
				$scope.name = "Amanda Seyfried"
			},
			
			templateUrl: 'assets/job_list_app/templates/directives/hello_world.html',
			
			
		}
	})
	.directive('markdown', function() {
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				element.html("<div>Hello there</div>").hide().fadeIn('slow');
			}
			
		}
		
	}).directive('mySubNav', function(){
	    return {
	        restrict: 'E',
	        scope: {
	           current: '=current'
	        },
	        templateUrl: 'assets/job_list_app/templates/my_sub_nav.html',
	        controller: function($scope) {
	        }
	    }
	}).directive('mySubArea1', function(){
	    return {
	        restrict: 'E',
	        templateUrl: 'assets/job_list_app/templates/mySubArea1.html',
	        controller: function($scope) {
	            //controller for your sub area.
	        }
	    }
	}).directive('jobSubNav', function() {
		return {
			restrict: 'E',
			
			templateUrl: 'assets/job_list_app/templates/directives/job_sub_nav.html'
		}
		
	}).directive('notepad', function() {
		return {
			restrict: 'E',
			
			templateUrl: 'assets/job_list_app/templates/directives/notepad.html'
		}
		
	});
	

