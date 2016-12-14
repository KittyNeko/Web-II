// var products = ["Brooklyn T-Shirt White",
// 				"Brooklyn T-Shirt Black",
// 				"Apple Watch",
// 				"Android Phone"];

// var customerName = "Poom";
// var price = 10;
// var prices = [10, 10, 199, 159];
// var quantity = 2;
// var totalPrice = 0;
// var time = new Date();
// var curHr = time.getHours();
// var discount = 0.25;

// var customerElement = document.getElementById("name");
// customerElement.textContent = customerName;

// //var customerElement = document.getElementById("price");
// //customerElement.textContent = price;

// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent = totalPrice;

// var productsText = "";
// var productsElement = document.getElementById("product-list");

// var timeofDay = "";
// var timeofDayElement = document.getElementById("time-of-day");

// for (var i = 0; i < products.length; i++) {
// 	productsText += "<li class = 'list-group-item'><span class = 'badge'>$" + prices[i] + "</span>" + products[i] + "</li>";
// }

// productsElement.innerHTML = productsText;


// totalPrice = (prices[0] + prices[1] + prices[2] + prices[3]) * (1 - discount);
// totalPriceElement.textContent = totalPrice;

// if (curHr < 12) {
//   timeofDay = "Good Morning ";
// } else if (curHr < 18) {
//   timeofDay = "Good Afternoon ";
// } else {
//   timeofDay = "Good Evening ";
// }

// timeofDayElement.textContent = timeofDay;


var shop 	= {
	customerName: "Poom",
	totalPrice: 0,
	products: [	"Brooklyn T-Shirt White",
				"Brooklyn T-Shirt Black",
				"Apple Watch",
				"Android Phone"
				],
	prices : [10, 10, 199, 159],
				
	displayCustomerName: function() {
		var customerElement = document.getElementById("name");
		customerElement.textContent = this.customerName;
	},

	displayProductList: function() {
		var productsText = "";
		var productsElement = document.getElementById("product-list");
					
		this.productsText += "<li class = 'list-group-item'><span class = 'badge'>$" + this.prices[0] + "</span>" + this.products[0] + "</li>";
		this.productsText += "<li class = 'list-group-item'><span class = 'badge'>$" + this.prices[1] + "</span>" + this.products[1] + "</li>";
		this.productsText += "<li class = 'list-group-item'><span class = 'badge'>$" + this.prices[2] + "</span>" + this.products[2] + "</li>";
		this.productsText += "<li class = 'list-group-item'><span class = 'badge'>$" + this.prices[3] + "</span>" + this.products[3] + "</li>";
		productsElement.innerHTML = this.productsText;
	},

	calculateTotalPrice: function() {
		return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
	},

	displayTotalPrice: function() {
		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.totalPrice;
	}
}

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();