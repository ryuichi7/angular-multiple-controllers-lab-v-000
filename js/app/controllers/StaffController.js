function StaffController() {
	var vm = this;
	vm.name = "John";
	vm.email = "john@mail.com";
	vm.phone = "123-456-7890";
}

angular
	.module('app')
	.controller('StaffController', StaffController)