function append3(){
	var commentername3 = document.getElementById("comment_author").value;
	var commentermessage3 = document.getElementById("comment").value;
	var grades3 = {
		name: commentername3,
		message: commentermessage3
	};

	
	var existingValues3 = JSON.parse(localStorage.getItem("comments3")) ;
	if (!existingValues3){
		existingValues3 = [];
	}
	existingValues3.push(grades3);
	localStorage.comments3 = JSON.stringify(existingValues3);
	document.getElementById("commentdisplay").innerHTML = "";
	for (var i=0;i<existingValues3.length;i++)
	{
	document.getElementById("commentdisplay").innerHTML += "   " + existingValues3[i]['name'] +": "+ existingValues3[i]['message'] + "<br>"+ "<br>";
	}
	
}

function ondisplay3() {
	var existingValues3 = JSON.parse(localStorage.getItem("comments3")) ;
	document.getElementById("commentdisplay").innerHTML = "";
	for (var i=0;i<existingValues3.length;i++)
	{
	document.getElementById("commentdisplay").innerHTML += "   " + existingValues3[i]['name'] +": "+ existingValues3[i]['message'] + "<br>"+ "<br>";
	}

}


var tempMode = 1;
function getWeather(lat, lon) {
  var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=06170c100199dbae1e223cc3dfad960b";

  $.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(resp) {

      $("#tempMode").on("click", function() {
        if (this.checked) {
          $("#temp-text").html(cels.toFixed(1) + " C&deg");
          console.log("checked");
        } else
          $("#temp-text").html(fahr.toFixed(0) + " F&deg");
      });
      console.log(apiURI);
      console.log(resp.name);
      if (resp.name) {
        $("#city-text").html(resp.name + ", " + resp.sys.country);
      }
      if (resp.wind) {
        var knots = resp.wind.speed * 1.9438445;
        $("#wind-text").html(knots.toFixed(1) + " Knots");
      }
      if (resp.main.temp) {
        var fahr = (resp.main.temp * 9 / 5) - 459.67;
        var cels = (resp.main.temp - 273.15);
        if (cels > 24){ 
          $("#temp-text").css("color", "red");
        } else if (cels < 18){
          $("#temp-text").css("color", "blue");
        }
        $("#temp-text").html((tempMode === 1 ? fahr.toFixed(0) + " F&deg" : cels.toFixed(0) + " C&deg"));
      }
      if (resp.weather) {
        var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
        console.log(imgURL)
        $("#weatherImg").attr("src", imgURL);
        $("#weather-text").html(resp.weather[0].description);
      }   
    },
    error: function(resp) {
       alert("Error: " + e);
       clearInterval(updateinter);
    }
  });
}

function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    alert("geolocation not available" + e);
    clearInterval(updateinter);
  }
}
var i = 0;
var updateinter = setInterval(function(){
  console.log("iteration# " + i++);
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    alert("geolocation not available" + e);
  }
}, 300000);

getLocation();