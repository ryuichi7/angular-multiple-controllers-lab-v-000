function ContactController() {
	var vm = this;
	vm.name = "Brett";
	vm.email = "mail@mail.com";
	vm.phone = "555-555-555"
	
	this.changeName = function() {
		vm.name = "Evan";
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController)