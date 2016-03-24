angular.module('starter.controllers', ['ionic', 'ionic-audio'])

.controller('DashCtrl',['$scope', '$http', function($scope , $http) {

	$http.get('http://api.azimov.xyz/api/ios/albums/AbuNur/').success( function(response){

		$scope.musics1 = response.albums;

	});

}])

.controller('DashDetailCtrl', function($scope, $http, $stateParams, Dashs, $ionicModal, $cordovaMedia) {
$scope.dashMusicId=$stateParams.dashId;
 $http.get('http://api.azimov.xyz/api/ios/albums/AbuNur/').success( function(response){

		$scope.musics1 = response.albums;

	});
})

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

})

.controller('AccountCtrl',['$scope', '$http', function($scope , $http) {

	$http.get('http://api.azimov.xyz/api/ios/albums/Ayyubxon/').success( function(response){

		$scope.musics2 = response.albums;

	});

}])

.controller('AccountDetailCtrl', function($scope, $http, $stateParams, Accounts, $ionicModal, $cordovaMedia) {
$scope.accountMusicId=$stateParams.accountId;
 $http.get('http://api.azimov.xyz/api/ios/albums/Ayyubxon/').success( function(response){

		$scope.musics2 = response.albums;

	});
});
