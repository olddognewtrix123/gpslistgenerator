
function initMap() {
	
	
	console.log(" monkeeees");

        var geocoder = new google.maps.Geocoder();
        

        document.getElementById('submit').addEventListener('click', function() {
        	
        
        
       
        
	    geocodeAddress(geocoder);
        });
	
      }
      
      
	
    var addresses = [];

	var coordinates = [];
	
	var i = 0;
			
	var display = "";

	function geocodeAddress(geocoder) {
		
		var inputString = 	document.getElementById('address').value;
        addresses = [];
        addresses = inputString.split(';')
        var addressesL = addresses.length; 
		
		 console.log("addresses length is " + addresses.length);

		setTimeout(function () {    //  call a 3s setTimeout when the loop is called\
			var currentaddress = addresses[i];
      			geocoder.geocode({'address': currentaddress}, function(results, status) {
          			if (status === 'OK') {
	  		 	var target = results[0].geometry.location;
	  	 		var targetStr = target.toString() 
	  	 		var targetStrT = targetStr.replace(/[()]/g,"");
				console.log(targetStrT);

				display = display + targetStrT + ";" ;
	//			display = display + ";" + targetStrT;

				document.getElementById('display').innerHTML = display;
	 	  		coordinates.push(targetStrT)
         	 		} else {
         	 		  alert('Geocode was not successful for the following reason: ' + status);
         	 		}
         		});
				i++;
				if(i<addressesL)
				{geocodeAddress(geocoder);}
		}, 3000)

}




// test user input:  7301 Buttercup Rd,Sykesville Maryland;7555 Waterloo Rd,Jessup Maryland;30420 Revells Neck Rd,Westover Maryland