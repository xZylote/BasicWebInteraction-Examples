$( document ).ready(function() {

// Your code
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab 
  $('.tab').css('display','none');
  switch(n){
	case 0:
		document.getElementById("tab0").style.display = "block";
		document.getElementById("nextBtn").style.display = "inline";
		document.getElementById("prevBtn").style.display = "none";
		document.getElementById("lastBtn").style.display = "none";
		break;
	case 1:
		document.getElementById("tab1").style.display = "block";
		document.getElementById("prevBtn").style.display = "inline";
		break;
	case 2:
		document.getElementById("tab2").style.display = "block";
		document.getElementById("prevBtn").style.display = "inline";
		break;
	case 3:
		document.getElementById("tab3").style.display = "block";
		document.getElementById("nextBtn").style.display = "none";
		document.getElementById("prevBtn").style.display = "none";
		document.getElementById("lastBtn").style.display = "inline";
		break;
	
  }
  callWizard(n);
}

function callWizard(n){
	// This function will update the Wizard to the state of the current tab displayed
	$('.active').removeClass('active');
	$('.finish').removeClass('finish');
	switch(n){
		case 0:
			$('#step1').addClass('active');
			break;
		case 1:
			$('#step2').addClass('active');
			$('#step1').addClass('finish');
			break;
		case 2:
			$('#step3').addClass('active');
			$('#step1').addClass('finish');
			$('#step2').addClass('finish');
			break;
		case 3:
			$('#step4').addClass('active');
			$('#step1').addClass('finish');
			$('#step2').addClass('finish');
			$('#step3').addClass('finish');
			break;
	}
}

document.getElementById("prevBtn").addEventListener("click", prevTab);
document.getElementById("lastBtn").addEventListener("click", toTab0);
document.getElementById("nextBtn").addEventListener("click", nextTab);



function toTab0(){
	currentTab = 0;
	showTab(currentTab);
}

function prevTab(){
	currentTab = currentTab -1;
	showTab(currentTab);
}

function nextTab(){
	currentTab = currentTab +1;
	showTab(currentTab);
}
});
var sum;
function add(elem, ingredient){
	 elem.style.opacity = '0.7';
	 elem.innerHTML = '-';
	 elem.style.color = 'red';
	 elem.setAttribute( "onclick", "remove(this, '"+ingredient+"')" );
	 
	 /* Aus Assignment 4 */
     var entry = document.createElement("li");
        setTimeout(function() {
          entry.className = "show";
        }, 5);
    entry.appendChild(document.createTextNode(ingredient));
    document.getElementById("todoList").appendChild(entry);
    }
function remove(elem, ingredient){
	 elem.style.opacity = '0';
	 elem.innerHTML = '+';
	 elem.style.color = 'green';
	 elem.setAttribute( "onclick", "add(this, '"+ingredient+"')" );
	 elem.setAttribute( "style", ":hover {}" );	
	 
	 var items = document.querySelectorAll("#todoList li");
	 for(var i = 0; i < items.length; i++){
		 if (ingredient == items[i].innerHTML){
		 items[i].parentNode.removeChild(items[i]);
		 }
	 }
	 
    }
function refresh(){
var radio = document.getElementsByName('rad');
for (var i=0, length = radio.length; i<length; i++) {
if (radio[0].checked) {
	document.getElementById("adressField").style.visibility = 'hidden';
}
if (radio[1].checked) {
	document.getElementById("adressField").style.visibility = 'visible';
}
}
}