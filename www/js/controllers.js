angular.module('starter.controllers', ['ionic', 'ionic-audio'])

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl',['$scope', '$http', function($scope , $http) {

	$http.get('http://api.azimov.xyz/api/ios/albums/Abdulloh/').success( function(response){

		$scope.musics = response.albums;

	});

}])


.controller('ChatDetailCtrl', function($scope, $http, $stateParams, Chats, $ionicModal, $cordovaMedia) {
$scope.musicId=$stateParams.chatId;
 $http.get('http://api.azimov.xyz/api/ios/albums/Abdulloh/').success( function(response){

		$scope.musics = response.albums;

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
