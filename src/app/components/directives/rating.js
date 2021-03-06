// Create the Closure namespace
goog.provide('schpeyeder.web.components.directives.rating')

goog.scope(function(){
		
	/**
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.directives.rating = function () {
		return {
	      restrict: 'E',
	      templateUrl: '/app/components/directives/rating.template.html',    
	      scope: 
	      {
	    	  ratingValue: '=',
	    	  max: '=',    	  
	    	  readonly: '@',
	    	  onRatingSelected: '&'
	      },    	      	 
	      link: function (scope, elem, attrs) {	    	   
	    	   // Create a function for updating the rating, this is not accessible on the template
	    	   var update = function() {
			      scope.stars = [];
			      for(var i = 0; i < scope.max; i++) {
			         scope.stars.push({filled: i < scope.ratingValue});
			      } 
	    	   };
	    	   
	    	   /**
	    	    * @export
	    	    */
	    	   scope.toggle = function(index){
	    		   scope.ratingValue = index + 1;
	    		   
	    		   // Fire the event for Rating Selected
	    		   scope.onRatingSelected({newRating: index + 1});
	    	   };
	    	   
	    	   // Wire up a watch on the ratingValue, calling update when the value changes
	    	   scope.$watch('ratingValue', function(oldVal, newVal) {
	    		     if(newVal) {
	    		    	 update();
	    		     }
	    	   });
	    	   
	      	} // end link      
		}; // end return
		
	}; // end directive
}); // end goog.scope