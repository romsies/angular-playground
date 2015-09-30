var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross',  'Rachel'];
	this.controllersStatus = 'Working';
}
function addFriend(){
	this.newFriend = 'New Friend';
}