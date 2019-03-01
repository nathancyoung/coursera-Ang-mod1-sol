(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.response=""
    $scope.review_items = function () {
    	if ($scope.lunchmenu ==="" || $scope.lunchmenu.trim()==="") {
    		$scope.response = 'Please enter data first';
    	}
    	else {
    		let menusplit = $scope.lunchmenu.split(',');
    		let menulength=menusplit.length;
    		let menulength_adj = 0;
    		for (let i=0;i<menulength;i++) {
    			if (menusplit[i].trim().length > 0) {
    				menulength_adj ++;
    			}
    		}
			console.log("number of items", menulength_adj)
			if (menulength_adj == 0) {
				$scope.response = "Please enter data first"
			}
			else if (menulength_adj <= 3) {
				$scope.response = "Enjoy!";
			} 

			else {
				$scope.response = "Too much!";
			}
		
    	}
    	console.log($scope.lunchmenu)
    }
  }



}
)();

