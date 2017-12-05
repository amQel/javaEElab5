$(document).ready(function () {
	  //your code here
$('#castleadd').submit(function() {
    return isViable($("form#castleadd")); 
});
function isViable($form) {
	var viable = true;
	var temp=0;
	$form.find("input:radio").each(function(){
		 var input = $(this);
		 if(input.is(":checked")) temp++;
	});
	if(temp!=1) viable=false; temp=0;
	$form.find("input:checkbox").each(function(){
		 var input = $(this);
		 if(input.is(":checked")) temp++;
	});
	if(temp==0) viable=false;
	$form.find("input:text").each(function(){
		 var input = $(this);
		 if(!$.trim(input.val()).length) viable=false;
	});
	if(!viable){
		$('.warning').text(" Aby stworzyć zamek uzupełnij wszystkie pola.");
	}
	if(!$.isNumeric($form.find("[name=built]").val())) $('.warning').append(" Data musi być cyfrą.");
	return viable;
	
}

});