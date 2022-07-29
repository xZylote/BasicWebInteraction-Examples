$( document ).ready(function() {

// Your code
hideElements();

var btn1 = document.getElementById("button1");
btn1.addEventListener('click', showMore1);

var btn2 = document.getElementById("button2");
btn2.addEventListener('click', showMore2);



function hideElements(){
	var e = [document.getElementById("loader1"),
			 document.getElementById("row5"), 
			 document.getElementById("row6"), 
			 document.getElementById("loader2"),
			 document.getElementById("buttonFrame2"), 
			 document.getElementById("row7"), 
			 document.getElementById("row8")];
	e.forEach(function(item, index, array){
		e[index].style.display = "none";
	});

};
	
function showMore1(){
	document.getElementById("button1").style.display = "none";
	document.getElementById("loader1").style.display = "flex";
	setTimeout(function(){
		var x = [document.getElementById("row5"),
			 document.getElementById("row6")];
		x.forEach(function(item, index, array){
			x[index].style.display = "flex";
		});
	
		document.getElementById("buttonFrame2").style.display = "block"; 
		document.getElementById("buttonFrame1").style.display = "none";
	;}, 3000);
		
}

function showMore2(){
	document.getElementById("button2").style.display = "none";
	document.getElementById("loader2").style.display = "flex";
	setTimeout(function(){
		var x = [document.getElementById("row7"),
			 document.getElementById("row8")];
		x.forEach(function(item, index, array){
			x[index].style.display = "flex";
		});
	
		document.getElementById("buttonFrame2").style.display = "none";
	;}, 3000);

}

});
