function process() { 
	setInterval(function(){  
		var food = encodeURIComponent(document.getElementById("userInput").value);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (xhttp.readyState == 4 && xhttp.status == 200) {
		    document.getElementById("underInput").innerHTML = xhttp.responseText; 
		  }
		};
		xhttp.open("GET", "foodstore.php?food=" + food, true);
		xhttp.send(); 
	}, 2000);
  
}