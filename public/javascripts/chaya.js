$(document).ready(function(){
	$("#first_time").hide();
	$("#other_div").hide();
	
	$("#date").datepicker();

	$("#other_incident").click(function() {
  		var isChecked = $(this).is(':checked');
  		if(isChecked)
    	{
       		$("#other_div").show();
    	}
    	else
    	{
        	$("#other_div").hide();
    	}

	});
	
});

function first_time_display()
{
	var val = $('input[name=person]:checked').val();
	if(val == "Survivor")
	{
		$("#first_time").show();
	}
  	else
  	{
  		$("#first_time").hide();
  	}
}

function onSubmitClick() //to check for empty fields
{
	flag = true;
	onSubmission();	
}

function onSubmission()
{
	var person = $('input[name=person]:checked').val(); //person who is reporting
	
	var doYouKnow = $('input[name=assailant]:checked').val(); //do you know assailant
	
	var firstTimeCrime;
	
	if(person == "Survivor")
	{
		firstTimeCrime = $('input[name=time]:checked').val(); //first time facing crime
	}
	else
	{
		firstTimeCrime = "Not Applicable"
	}
	
	
	var incident_list="";
	 $('.incident:checked').each(function() {
          incident_list += $(this).val() + ",";
        });
        incident_list =  incident_list.slice(0,-1);
    	//alert(incident_list);
    
    var otherIncidence="Not Applicable";
     
    if(incident_list.indexOf("Other")!=-1)
    	otherIncidence = $("#other").val();
 	
 	//alert(incident_description);
 	
	var location = $("#location").val();
	var locationLat = $("#locationLat").val();
	var locationLng = $("#locationLng").val();

	var date = $("#date").val();
	var time = $("#time").val();
	
 	var comments = $("textarea#additional_info").val();
 	
 	var firstName = $("#firstName").val();
 	var lastName = $("#lastName").val();
 	var email = $("#email").val();
 	var number = $("#number").val();
 	console.log("Inside for submission");

 	$.post( "/submitReport", 
 		{ 	"person": person, 
 			"doYouKnow": doYouKnow, 
 			"firstTimeCrime": firstTimeCrime,
 			"incident_list": incident_list,
 			"otherIncidence": otherIncidence,
 			"location" : location,
 			"locationLat" : locationLat,
 			"locationLng": locationLng,
 			"date" : date,
 			"comments" : comments,
 			"firstName" : firstName,
 			"lastName" : lastName,
 			"email": email,
 			"number" : number});
 	event.preventDefault();
 	
}
