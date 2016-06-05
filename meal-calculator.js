var Diner = function(name, table, meals) {
	this.name = name;
	this.table = table;
	this.meals = [];
};

var meals = {
	p1: {dish: 'cheese pizza', cost: 14.00},
	h1: {dish: 'hamburger', cost: 10.00}
};

var Table = function(diners, bill) {
	this.diners = [];
	this.bill = bill;
};

var Meal = function(dish, cost) {
	this.dish = dish;
	this.cost = cost;
};

function addNewMeal(code, dish, cost) {
	var meal = new Meal(dish, cost);
	meals[code] = meal;
}

addNewMeal('p2', 'pepperoni pizza', 15.00);

var diner1 = new Diner("Nicole", 1);
diner1.meals.push('p1');
diner1.meals.push('h1');

var diner2 = new Diner("Bob");
diner2.meals.push('p1');

var table1 = new Table();
table1.diners.push(diner1, diner2);

function calculateBill(diner) {
	var mealSubtotal = 0;
	diner.meals.forEach(function(meal) {
		return mealSubtotal += meals[meal].cost;
	})
	diner.mealSubtotal = mealSubtotal;
}

function calculateTotalCost(cost, tax, tip) {
	var costWithTax = (cost*tax)+cost;
	totalCost = (costWithTax*tip)+costWithTax;
	return totalCost = totalCost.toFixed(2);
}

function getDinerTotal(table) {
	table.diners.forEach(function(diner) {
		calculateBill(diner);
		calculateTotalCost(diner.mealSubtotal, .03, .2);
		diner.totalCost = totalCost;
	})
}

getDinerTotal(table1);

function getTableTotal(table) {
	var tableSubtotal = 0;
	table.diners.forEach(function(diner) {
		tableSubtotal += diner.mealSubtotal;
	});
	table.tableSubtotal = tableSubtotal;
	calculateTotalCost(table.tableSubtotal, .03, .2);
	table.totalCost = totalCost;
}

getTableTotal(table1);

function printBill(table) {
	console.log("Table Total Amount Due: " + table.totalCost);
	table.diners.forEach(function(diner) {
	console.log(diner.name + ': ' + diner.totalCost);
	});
}

printBill(table1);