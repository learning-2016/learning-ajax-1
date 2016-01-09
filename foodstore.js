function process() { 

	/*
	* Start interval when typing a keyword in the 
	* field 
	*/
	var timeOut = setInterval(function(){  
		var food = encodeURIComponent(document.getElementById("userInput").value);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (xhttp.readyState == 4 && xhttp.status == 200) {
		    document.getElementById("underInput").innerHTML = xhttp.responseText; 
		  }
		};
		xhttp.open("GET", "foodstore.php?food=" + food, true);
		xhttp.send(); 

		
		/**
		* Clear timeout after interval  
		*/
		clearInterval(timeOut);

	}, 1000); 

}