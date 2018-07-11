let responClick = document.getElementById('responSum');

function doFizzBuzz() {
        const num = prompt("Please enter a number:", "Enter Your Number Here");  // a prompt will appear to ask you input a number
        let finalAnswer = '';

        if(isNaN(num) === true){
        	finalAnswer = ("The Input you entered is not a number");
        }
        else if ( num%3 === 0 && num%5 === 0 && num > 0){
        	finalAnswer = ("It's a FizzBuzz!!!");
        }
        else if ( num%3 === 0 && num > 0){
        	finalAnswer = ("It's a Fizz!!!");
        }
        else if ( num%5 === 0 && num > 0){
        	finalAnswer = ("It's a FizzBuzz!!!");
        }
        else {
        	finalAnswer = ("Just a Number: " + num);
        }

        responClick.innerHTML = finalAnswer;
    }

// JS Part 2 : Data Object (Show Trip in Alert Windows)

const trip = {
  location: "Kuala Lumpur",
  travelPartners: ["Mum", "Dad", "Sis", "Bro", "Cousin"],
  numDays: 14,
  places: ["Time Square", "Brooklyn Botanical Gardens", "Central Park","White House","Place 2"]
}


function showTrip() {

   	function listPartners() {

   		let output = "";

   		for(let i=0; i<=trip.travelPartners.length-1; i++) {
   		 output = output + trip.travelPartners[i];
   			if (i < trip.travelPartners.length-2) {
   				output = output + ", ";
   			}
   			else if (i === trip.travelPartners.length-2) {
   		 		output = output + ", and ";
   		 	}
   		}

   		return output;

   	}

   	function listPlaces() {

   		let output = (trip.places.length) + " Places to Visit: <br/>";

   		for(let i=1; i<=trip.places.length; i++) {
   		 output = output + "* " + trip.places[i-1] + "<br/>";
   		}

   		return output;

   	}

   	responClick.innerHTML = ("My Dream Trip: " + trip.location + "<br/>with " + listPartners() + " for " + trip.numDays + " days. <br/><br/>" + listPlaces());
}

// JS Part 2 : Reading List


const readingBook = {
  title: ["Harry Potter", "Romance Of 3 Kingdoms", "Big Bad Wolf"],
  author: ["J.R.R. Tolkien", "Sima Zhao", "Shakespear"],
  alreadyRead: [false, true, true]
}


function listReading() {

	let status;
  let final = '';

	for(num in readingBook){

		if(readingBook.alreadyRead[num] === true) {status = "Yes, I have read";}
		else {status = "No, I have not read";}

    final = final + "</br>" + (readingBook.title[num] + " by " + readingBook.author[num] + " (" + status + ")");

	}

  responClick.innerHTML = final;
}



// JS Part 2 : Roman Numerals Method 1

const romanData = [
	["M",1000],
	["D",500],
	["C",100],
	["L",50],
	["X",10],
	["IX",9],
	["VI",6],
	["V",5],
	["IV",4],
	["I",1],
];

function romanNum() { 

	let numTarget = prompt("Please enter a number:", "Enter Your Number Here");
	let result = "";
	let number = numTarget;

	for(num in romanData){

		let loop = (number - (number%romanData[num][1]))/romanData[num][1];
		number = number%romanData[num][1]; 
		result = result + romanData[num][0].repeat(loop);
	}
	
	window.alert("The Roman Number for " + numTarget + " is : " + result);

}


// JS Part 2 : Roman Numerals Method 2

function toRoman(){

	let args = prompt("Please enter a number:", "Enter Your Number Here");

    if (isNaN(args)){
    return window.alert("I asked for a number, not gibberish!");
	}

	let romanString = '';
	let count = args;
	const romanNumerals = {
    	"M": 1000,
    	"CM": 900,
   		"D": 500,
    	"CD": 400,
    	"C": 100,
    	"XC": 90,
   		"L": 50,
    	"XL": 40,
    	"X": 10,
    	"IX": 9,
    	"V": 5,
    	"IV": 4,
    	"I": 1
	}

	for (num in romanNumerals) {
   		while (count >= romanNumerals[num]) {
        	romanString += num;
        	count -= romanNumerals[num];
    	}
	}

	window.alert("The Roman Number for " + args + " is : " + romanString);

}



// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all the array elements incremented by one as an output
// solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

const numberRange = [1,2,3,4,5,6,7,8,9,10];

function addOne(array){

	i=0;

	while(i < array.length){
		array[i]++;
		i++;
	}

  responClick.innerHTML = "The Array is : " + arr + "<br/>" + "The Answer is : " + sum;

}


///////////////////// 7-11 Kata ////////////////////////////////

const numRange = [12,38,-42,5,6,-13,10,-15] //result should be 71

function posSum(arr) {

  let sum=0;

  for(num in arr){
    if(Math.sign(arr[num]) === 1){
      sum = sum + arr[num];
      }
  }
  responClick.innerHTML = "The Array is : " + arr + "<br/>" + "The Answer is : " + sum;
}

document.getElementById('poSum').onclick = function () {posSum(numRange);} //select the button to trigger a function


///////////////////// get ID ////////////////////////////////

function replyClick(clickedId){
    const responClick = document.getElementById('responClick');
    responClick.innerHTML = "This Button ID : " + clickedId;
}

/////////////////////////////////////////////////





