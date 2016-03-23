angular.module('starter.controllers', ['ionic', 'ionic-audio'])

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl',['$scope', '$http', function($scope , $http) {

	$http.get('http://api.azimov.xyz/api/v1.0/albums/Abdulloh/').success( function(response){

		//$scope.musics = response.albums;
		$scope.musics = [
    {
      "album": "Abu_Hanifa",
      "category": "Abdulloh",
      "id": 5,
      "items": [
				{
        "name": "01_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
			},
        {
				"name":	"02_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
				}
      ]
    },
    {
      "album": "Ali",
      "category": "Abdulloh",
      "id": 17,
      "items": [
				{
        "name": "01_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
			},
        {
				"name":	"02_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
				}

      ]
    }
	];

	});

}])


.controller('ChatDetailCtrl', function($scope, $http, $stateParams, Chats, $ionicModal, $cordovaMedia) {
$scope.musicId=$stateParams.chatId;
 $http.get('http://api.azimov.xyz/api/v1.0/albums/Abdulloh/').success( function(response){

		//$scope.musics = response.albums;
		$scope.musics = [
    {
      "album": "Abu_Hanifa",
      "category": "Abdulloh",
      "id": 5,
      "items": [
				{
        "name": "01_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
			},
        {
				"name":	"02_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
				}
      ]
    },
    {
      "album": "Ali",
      "category": "Abdulloh",
      "id": 17,
      "items": [
				{
        "name": "01_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
			},
        {
				"name":	"02_Abu_Hanifa.mp3",
				"url": "http://dfh59cyusxnu7.cloudfront.net/Abdulloh/Abu_Hanifa/01_Abu_Hanifa.mp3"
				}

      ]
    }
	];
	
	});


   /*play online music*/
   $scope.playWebAudio = function(musicTitle)
  {
  	 var url='http://s3.amazonaws.com/api.ilmnuri.com/Abdulloh/'+musicTitle;
    try{
      $scope.audio = new Audio(url);
      $scope.audio.play();
    }
    catch(e){
      alert(e);
    }
  };

  $scope.stopWeb = function()
  {
    $scope.audio.pause();
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
