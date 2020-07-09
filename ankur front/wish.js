angular
		.module("myapp",[])
		.controller("myctrl",function($scope){
			$scope.IsVisible=true;
			$scope.ShowHide=function(){
				$scope.IsVisible=$scope.IsVisible?false:true;
			}
		});