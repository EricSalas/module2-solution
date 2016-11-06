(function(){

'use strict'; 

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var toBuy = this;
toBuy.items = [];
toBuy.items = ShoppingListCheckOffService.getToBuyItems();

toBuy.moveItem = function(itemIndex){
	ShoppingListCheckOffService.moveItem(itemIndex);

}

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var alreadyBought = this;
alreadyBought.items = [];
alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(){
	var service = this;
	var toBuyArray = [{name: "Sausage", quantity:8},{name: "Rice bags", quantity:3},{name: "Cookies", quantity:10},{name:"Cereal",quantity:1},{name:"Soup",quantity:4},{name:"Milk",quantity:7},{name:"Toothpaste",quantity:1}];
	var boughtArray = [];


	service.getToBuyItems = function(){
		return toBuyArray;
	}

	service.getBoughtItems = function(){
		return boughtArray;
	}

	service.moveItem = function(itemIndex){
		var item = toBuyArray[itemIndex];
		toBuyArray.splice(itemIndex,1);
		boughtArray.push(item);

	}

}






})();