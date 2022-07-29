$( document ).ready(function() {

// Your code
grid_size = 1;

$(" .box ")
  .draggable({ grid: [ grid_size, grid_size ] })

  .resizable({ grid: grid_size * 2 })
	
	.on("mouseover", function(){
  	$( this ).addClass("move-cursor")
	})

	.on("mousedown", function(){
  	$( this )
      .removeClass("move-cursor")
      .addClass("grab-cursor")
      .addClass("opac");
  
  	
  
	})

	.on("mouseup", function(){
  	$( this )
      .removeClass("grab-cursor")
      .removeClass("opac")
      .addClass("move-cursor");
	  
	 
	});

var Konstanz= "https://fcc-weather-api.glitch.me/api/current?lat=47.663360&lon=9.175980"
var NewYork= "https://fcc-weather-api.glitch.me/api/current?lat=40.712778&lon=-74.005833"
var Moscow="https://fcc-weather-api.glitch.me/api/current?lat=55.75&lon=37.616667"
var Frankfurt="https://fcc-weather-api.glitch.me/api/current?lat=50.110556&lon=8.682222"
var Hamburg="https://fcc-weather-api.glitch.me/api/current?lat=53.550556&lon=9.993333"
var Tokio="https://fcc-weather-api.glitch.me/api/current?lat=35.683889&lon=139.774444"

function getData(city, cityID){
	$.getJSON(city, function(data){
	console.log(data);

	var icon=data.weather[0].icon;
	var weather=data.weather[0].main;
	var temp=data.main.temp;
	var humidity=data.main.humidity;
	var wind=data.wind.speed;
	var pressure=data.main.pressure;
	var cityName;

	if (temp<0){
		$("#city"+cityID).css('background-color', '#6171e8');
	}else if(temp<10){
		$("#city"+cityID).css('background-color', '#61cbe8');
	}else if(temp<20){
		$("#city"+cityID).css('background-color', '#c4e861');
	}else if(temp<30){
		$("#city"+cityID).css('background-color', '#ed912f');
	}else{
		$("#city"+cityID).css('background-color', '#ff2c21');
	};

	//console.log(icon);

	switch(city){
		case Konstanz:
			cityName = "Konstanz";
			break;
		case NewYork: 
			cityName = "New York";
			break;
		case Moscow:
			cityName = "Moscow";
			break;
		case Frankfurt:
			cityName = "Frankfurt";
			break;
		case Hamburg:
			cityName = "Hamburg";
			break;
		case Tokio:
			cityName = "Tokio";
			break;
		default:
			console.log("cityID not found");
			break;
	};

	$("#city"+cityID+" .city").html(cityName);
	$("#city"+cityID+" .icon").attr("src", icon);
	$("#city"+cityID+" .weather").html(weather);
	$("#city"+cityID+" .temperature").html("Temp: "+temp+"°C");
	$("#city"+cityID+" .humidity").html("Humidity: "+humidity+"%");
	$("#city"+cityID+" .wind").html("Wind: "+wind+"km/h");
	$("#city"+cityID+" .pressure").html("Pressure: "+pressure+"hPa");
});
}

getData(Konstanz,1);
getData(NewYork,2);
getData(Moscow,3);
getData(Frankfurt,4);
getData(Hamburg,5);

document.getElementById('cityButton1').onclick = function(){dropdown(1);};
document.getElementById('cityButton2').onclick = function(){dropdown(2);};
document.getElementById('cityButton3').onclick = function(){dropdown(3);};
document.getElementById('cityButton4').onclick = function(){dropdown(4);};
document.getElementById('cityButton5').onclick = function(){dropdown(5);};

document.getElementById('panelBtn1-1').onclick = function(){togglePanel(1,1);};
document.getElementById('panelBtn1-2').onclick = function(){togglePanel(1,2);};
document.getElementById('panelBtn1-3').onclick = function(){togglePanel(1,3);};
document.getElementById('panelBtn1-4').onclick = function(){togglePanel(1,4);};
document.getElementById('panelBtn1-5').onclick = function(){togglePanel(1,5);};
document.getElementById('panelBtn1-6').onclick = function(){togglePanel(1,6);};

document.getElementById('panelBtn2-1').onclick = function(){togglePanel(2,1);};
document.getElementById('panelBtn2-2').onclick = function(){togglePanel(2,2);};
document.getElementById('panelBtn2-3').onclick = function(){togglePanel(2,3);};
document.getElementById('panelBtn2-4').onclick = function(){togglePanel(2,4);};
document.getElementById('panelBtn2-5').onclick = function(){togglePanel(2,5);};
document.getElementById('panelBtn2-6').onclick = function(){togglePanel(2,6);};

document.getElementById('panelBtn3-1').onclick = function(){togglePanel(3,1);};
document.getElementById('panelBtn3-2').onclick = function(){togglePanel(3,2);};
document.getElementById('panelBtn3-3').onclick = function(){togglePanel(3,3);};
document.getElementById('panelBtn3-4').onclick = function(){togglePanel(3,4);};
document.getElementById('panelBtn3-5').onclick = function(){togglePanel(3,5);};
document.getElementById('panelBtn3-6').onclick = function(){togglePanel(3,6);};

document.getElementById('panelBtn4-1').onclick = function(){togglePanel(4,1);};
document.getElementById('panelBtn4-2').onclick = function(){togglePanel(4,2);};
document.getElementById('panelBtn4-3').onclick = function(){togglePanel(4,3);};
document.getElementById('panelBtn4-4').onclick = function(){togglePanel(4,4);};
document.getElementById('panelBtn4-5').onclick = function(){togglePanel(4,5);};
document.getElementById('panelBtn4-6').onclick = function(){togglePanel(4,6);};

document.getElementById('panelBtn5-1').onclick = function(){togglePanel(5,1);};
document.getElementById('panelBtn5-2').onclick = function(){togglePanel(5,2);};
document.getElementById('panelBtn5-3').onclick = function(){togglePanel(5,3);};
document.getElementById('panelBtn5-4').onclick = function(){togglePanel(5,4);};
document.getElementById('panelBtn5-5').onclick = function(){togglePanel(5,5);};
document.getElementById('panelBtn5-6').onclick = function(){togglePanel(5,6);};



function togglePanel(panel,cityID){
	//console.log('togglePanel:('+panel+','+cityID+')');
	switch(cityID){
		case 1:
			getData(Konstanz,panel);
			break;
		case 2: 
			getData(NewYork,panel);
			break;
		case 3:
			getData(Moscow,panel);
			break;
		case 4:
			getData(Frankfurt,panel);
			break;
		case 5:
			getData(Hamburg,panel);
			break;
		case 6:
			getData(Tokio,panel);
			break;
	};
};

function dropdown(n){
	document.getElementById('cityDropdown'+n).classList.toggle('show');
};



window.onclick = function(event) {
	if (!event.target.matches('.city')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }

 

});
