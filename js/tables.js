//tables is in 2d array
//e.g. classes[0,0] = 'eecs'
//classes[0,2] = 5.0
//# of columns represent number of ratings + 2 (1 is dept name, the other is class #)
//# of rows reperesent number of classes 
//1-3
//1) overall rating of instruction
//2) overall rating of course
//3) how much you learned in the class
//4) intellectual difficulty
//5) effectiveness of intsructor
//6) hours per week
//7) how fulfilling this class was?
//nobody cares about demographics


function generateTable() {
	// var rating_length = 11,
	// ROW_LENGTH = 4000,
	// COLUMN_LENGTH = 2 + rating_length,
	// classes = new Array(ROW_LENGTH);

	//Send the AJAX call to the server
	$.ajax({
		//The URL to process the request
		'url': 'test.txt',
		//The type of request, also known as the "method" in HTML forms
		//Can be 'GET' or 'POST'
		'type': 'GET',
		//Any post-data/get-data parameters
		//This is optional
		// 'data': {
		// 	'paramater1': 'value',
		// 	'parameter2': 'another value'
		// },
		//The response from the server
		'success': function(data) {
			//You can use any jQuery/JavaScript here!!!

			console.log(data);
		},
		error:function(data) {
			console.log("error");
		}
	});

	// for (var i = 0; i < 10; i++) {
	// 	x[i] = new Array(COLUMN_LENGTH);
	// }
}
generateTable();