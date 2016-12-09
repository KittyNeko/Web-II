var products = ["Brooklyn T-Shirt White",
				"Brooklyn T-Shirt Black",
				"Apple Watch",
				"Android Phone"];

var customerName = "Poom";
var price = 10;
var prices = [10, 10, 199, 159];
var quantity = 2;
var totalPrice = 0;
var time = new Date();
var curHr = time.getHours();
var discount = 0.25;

var customerElement = document.getElementById("name");
customerElement.textContent = customerName;

//var customerElement = document.getElementById("price");
//customerElement.textContent = price;

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice;

var productsText = "";
var productsElement = document.getElementById("product-list");

var timeofDay = "";
var timeofDayElement = document.getElementById("time-of-day");

for (var i = 0; i < products.length; i++) {
	productsText += "<li class = 'list-group-item'><span class = 'badge'>$" + prices[i] + "</span>" + products[i] + "</li>";
}

productsElement.innerHTML = productsText;


totalPrice = (prices[0] + prices[1] + prices[2] + prices[3]) * (1 - discount);
totalPriceElement.textContent = totalPrice;

if (curHr < 12) {
  timeofDay = "Good Morning ";
} else if (curHr < 18) {
  timeofDay = "Good Afternoon ";
} else {
  timeofDay = "Good Evening ";
}

timeofDayElement.textContent = timeofDay;