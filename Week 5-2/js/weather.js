window.onload = function() {
	var weather = {
		render: function() {
			var bangkok = document.getElementById("bangkok");
			bangkok.addEventListener("click", function(){
				$.ajax({
					type: "GET", 
					url: "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=55d193b8cc97a9dfba634b0c0297f27a",
					success: function(data) {
						console.log(data);
						var city = document.getElementById("city");
						city.textContent = data.name;
						var icon = document.getElementById("icon");
						icon.src = "https://openweathermap.org/img/w/" +data.weather[0].icon +".png";
						var status = document.getElementById("status");
						status.textContent = data.weather[0].main +" - " +data.weather[0].description;
						var temp = document.getElementById("temp");
						temp.textContent = data.main.temp - 273.15 +"°C";
					}
				});
			});
			var london = document.getElementById("london");
			london.addEventListener("click", function(){
				$.ajax({
					type: "GET", 
					url: "http://api.openweathermap.org/data/2.5/weather?q=london&appid=55d193b8cc97a9dfba634b0c0297f27a",
					success: function(data) {
						console.log(data);
						var city = document.getElementById("city");
						city.textContent = data.name;
						var icon = document.getElementById("icon");
						icon.src = "https://openweathermap.org/img/w/" +data.weather[0].icon +".png";
						var status = document.getElementById("status");
						status.textContent = data.weather[0].main +" - " +data.weather[0].description;
						var temp = document.getElementById("temp");
						temp.textContent = data.main.temp - 273.15 +"°C";
					}
				});
			});
			var seoul = document.getElementById("seoul");
			seoul.addEventListener("click", function(){
				$.ajax({
					type: "GET", 
					url: "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=55d193b8cc97a9dfba634b0c0297f27a",
					success: function(data) {
						console.log(data);
						var city = document.getElementById("city");
						city.textContent = data.name;
						var icon = document.getElementById("icon");
						icon.src = "https://openweathermap.org/img/w/" +data.weather[0].icon +".png";
						var status = document.getElementById("status");
						status.textContent = data.weather[0].main +" - " +data.weather[0].description;
						var temp = document.getElementById("temp");
						temp.textContent = data.main.temp - 273.15 +"°C";
					}
				});
			});
		}
	};
	weather.render();
};