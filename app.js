var fizzBuzz = function (value) {
	//define a variable to use to store text
	var text = 0;

	for (var i=1;i<=value;i++) {
		//If divisible by 3 and 5 (aka 15), use "fizz buzz"
		if (i%15==0) {
			text="fizzbuzz";
		}
		//If divisible by 3, use "fizz"
		else if (i%3==0) {
			text="fizz";
		}
		//If divisible by 5, use "buzz"
		else if (i%5==0) {
			text="buzz";
		}
		//Else use the row number
		else {
			text=i;
		}
		//Find the last p in the body and insert a new p with text after it.
		$("body").find("p").last().after("<p></p>").text(text).addClass(text);
	}
};

var inputNumber = function () {
	var count = prompt("Enter a value");
	count = +count;
	//Check that the input is a proper value.  This accounts for decimals and strings.
	while (count%1 != 0 || count == 0 || count[0] == " ") {
		count = prompt("You entered a bad value.  Please use an integer number.");
	}
	return count;
};

$(document).ready(function() {
	fizzBuzz(inputNumber());
})