(function(){
	var id=1;
	var spamid=1;
	var sentid=1;
	var inboxlength,spamlength;

	var app = angular.module("mailapp", ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/inbox', {
			templateUrl: '/home/dev6/Downloads/Sahil/Angular JS 101/mailbox/mail/inbox.html',
			controller: 'InboxController',
			reloadOnSearch: false
		}).
		when('/spam', {
			templateUrl: '/home/dev6/Downloads/Sahil/Angular JS 101/mailbox/mail/spammail.html',
			controller: 'SpamController',
			reloadOnSearch: false
		}).
		when('/sent-mail', {
			templateUrl: '/home/dev6/Downloads/Sahil/Angular JS 101/mailbox/mail/sentmail.html',
			controller: 'SentController',
			reloadOnSearch: false
		}).			
		otherwise({
			redirectTo: '/'
		});
	}]);


	app.controller('InboxController',['$scope','$location', '$route',  function($scope,$location ,$route) {


		$scope.paths=$location.$$absUrl;
		$scope.sendpath=$location.$$absUrl;
		$scope.inboxmails=[
		{
			id:id++,
			date:"Jan 12th",
			subject:"Welcome to Angular101",
			from:"admin@angularjs.com",
			to:"user@angularjs.com",
			body:"Learning angular basics.",
			click:false
		},
		{
			id:id++,
			date:"Jan 13th",
			subject:"Welcome to Angular102",
			from:"anonymous@angularjs.com",
			to:"user@angularjs.com",
			body:"Learning angular.",
			click:false
		}
		];


		$scope.setfalse=function(){
			for(i=0;i<$scope.inboxmails.length;i++)
			{
				$scope.inboxmails[i].click=false;
			}
			var n = $location.$$absUrl.lastIndexOf('#');
			$location.$$absUrl=$location.$$absUrl.substr(0,n);
			$route.reload();
		}

		inboxlength=$scope.inboxmails.length;

		$scope.changeclickstatus=function(elem){
			$location.$$absUrl = $scope.paths;

			for(i=0;i<$scope.inboxmails.length;i++)
			{
				$scope.inboxmails[i].click=false;

				if($scope.inboxmails[i].id==elem.id)
				{	
					$scope.inboxmails[i].click=true;

					$location.$$absUrl=$scope.paths+'/'+(i+1); 
					$scope.sendpath=$location.$$absUrl;
// $scope.$on('$locationChangeSuccess', function(event) 
// {
//  	$location.$$absUrl = paths;
//  	console.log($location.$$absUrl);
// });
}				
}
}

}]);


app.controller('SpamController', ['$scope','$location', '$route',  function($scope,$location ,$route) {

	$scope.paths=$location.$$absUrl;
	$scope.sendpath=$location.$$absUrl;

	$scope.spammails=[
	{
		id:spamid++,
		date:"Jan 11th",
		subject:"You have won $1000000",
		from:"321@winners.com",
		to:"user@angularjs.com",
		body:"To claim your prize, you have to send us just the transfer fees.",
		click:false
} //,       
// {
// 	id:spamid++,
// 	date:"Jan 13th",
// 	subject:"You have won $1000000",
// 	from:"321@winners.com",
// 	to:"user@angularjs.com",
// 	body:"To claim your prize, you have to send us just the transfer fees.",
// 	click:false
// },
// {
// 	id:spamid++,
// 	date:"Jan 16th",
// 	subject:"You have won $1000000",
// 	from:"321@winners.com",
// 	to:"user@angularjs.com",
// 	body:"To claim your prize, you have to send us just the transfer fees.",
// 	click:false
// }
];

spamlength=$scope.spammails.length;

$scope.setfalse=function(){
	for(i=0;i<$scope.spammails.length;i++)
	{
		$scope.spammails[i].click=false;
	}

	var n = $location.$$absUrl.lastIndexOf('#');
	$location.$$absUrl=$location.$$absUrl.substr(0,n);
	$route.reload();
}



$scope.changeclickstatus=function(elem){
	for(i=0;i<$scope.spammails.length;i++)
	{
		$scope.spammails[i].click=false;

		if($scope.spammails[i].id==elem.id)
		{	
			$scope.spammails[i].click=true;

			$location.$$absUrl=$scope.paths+'/'+(inboxlength+i+1); 
			$scope.sendpath=$location.$$absUrl;
		}				
	}
}

}]);


app.controller('SentController', ['$scope','$location', '$route',  function($scope,$location ,$route) {

	$scope.paths=$location.$$absUrl;
	$scope.sendpath=$location.$$absUrl;

	$scope.sentmails=[
	{
		id:sentid++,
		date:"Jan 10th",
		subject:"Where to practice",
		from:"user@angularjs.com",
		to:"admin@angularjs.com",
		body:"Where can I try examples.",
		click:false
	}
	];

	$scope.setfalse=function(){
		for(i=0;i<$scope.sentmails.length;i++)
		{
			$scope.sentmails[i].click=false;
		}

		var n = $location.$$absUrl.lastIndexOf('#');
		$location.$$absUrl=$location.$$absUrl.substr(0,n);
		$route.reload();
	}

	$scope.changeclickstatus=function(elem){
		for(i=0;i<$scope.sentmails.length;i++)
		{
			$scope.sentmails[i].click=false;

			if($scope.sentmails[i].id==elem.id)
			{	
				$scope.sentmails[i].click=true;
				$location.$$absUrl=$scope.paths+'/'+(inboxlength+spamlength+i+1); 
				$scope.sendpath=$location.$$absUrl;
			}				
		}
	}

}]);


})();