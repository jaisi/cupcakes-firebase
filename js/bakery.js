"use strict";

let inventory = [];
let bakery = {};

bakery.getInventory = () => {
	return inventory;
};
/*
let fillInventory = (data => {
	data.forEach(function(element){
		inventory.push(element);
	});
});*/

bakery.loadInventory = () => {
	return new Promise(function (resolve, reject){
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");// ./ takes you to root of project
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			var data = JSON.parse(this.responseText);
			resolve(data);//no longer responsible for calling populatePage function
		});
	});
};

module.exports = bakery;
