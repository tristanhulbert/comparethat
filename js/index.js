$(document).ready(function(){


 	
// attempt One

	$("#submit").click(compare);

	function compare(){
		var valueOne = $("#a").val()
		var valueTwo = $("#b").val()
			if (valueOne > valueTwo) {
				$("#comparison").html(">")
			} else if (valueOne < valueTwo){
				$("#comparison").html("<")
			} else {
				$("#comparison").html("=")
			}
	};



// attempt Two

	// $("#submit").click(getvalue);

 // 	function getvalue(){
 // 		var valueOne = $("#a").val()
	// 	var valueTwo = $("#b").val()
	// 	compare(valueOne, valueTwo)
 // 	}

	// function compare(valueOne, valueTwo){
	// 		if (valueOne > valueTwo) {
	// 			$("#comparison").html(">")
	// 		} else if (valueOne < valueTwo) {
	// 			$("#comparison").html("<")
	// 		} else {
	// 			$("#comparison").html("=")
	// 		}

	// };



});