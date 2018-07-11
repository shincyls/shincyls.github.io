const myElem = document.getElementById('titlepage');
const myElem2 = document.getElementsByClassName('coverphoto');
const myElem3 = document.querySelector('h2');
const myElem5 = document.querySelector('#box2');

////////////////////////////////////////////////////////////

let changeTitleSequence = " again";
let changeTitleTimes = 0;

function changeTitle() {

	myElem5.innerHTML = "I've Changed!!!" + changeTitleSequence.repeat(changeTitleTimes);
	changeTitleTimes++;

}

function changeReset() {

	myElem5.innerHTML = "Javascript: Interactivity";
	changeTitleTimes = 0;
}

////////////////////////////////////////////////////////////


const myElem6 = document.querySelectorAll("h3");

function headerShadow() {
	for(num in myElem6){
		myElem6[num].classList.add("txpurple");
		myElem6[num].classList.add("txshadow");
	}
}

function removeShadow() {
	for(num in myElem6){
		myElem6[num].classList.remove("txpurple");
		myElem6[num].classList.remove("txshadow");
	}
}

////////////////////////////////////////////////////////////

function randomRGB() {

	let randomColor = "";

	let color_r = Math.floor(Math.random()*255);
	let color_g = Math.floor(Math.random()*255);
	let color_b = Math.floor(Math.random()*255);

	randomColor = "rgb(" + color_r + "," + color_g + "," + color_b + ")";

	return randomColor;

}

function randomMargin() {

	let randomMrg = "";

	let mrg_top = Math.floor(Math.random()*200);
	let mrg_right = Math.floor(Math.random()*200);
	let mrg_bottom = Math.floor(Math.random()*200);
	let mrg_left = Math.floor(Math.random()*200);

	randomMrg = mrg_top + "px " + mrg_right + "px " + mrg_bottom + "px " + mrg_left + "px";

	return randomMrg;

}


////////////////////////////////////////////////////////////
/////////////////   Javascript Elusive Button  /////////////////
////////////////////////////////////////////////////////////

const buttonMove = document.getElementById('run');

const buttonSay = [
"No no no", 
"You can't catch me", 
"I'm here!", "You suxx", 
"You are fool", 
"Watch Out!", 
"I'm getting tired", 
"I can't run anymore", 
"Maybe i need diet", 
"That's all", 
"Ok, I'm done"
]

let count = 0;

buttonMove.onmouseover = function () {

	if(count <= 10){
	buttonMove.innerHTML = buttonSay[count];
	buttonMove.style.backgroundColor = randomRGB();
	buttonMove.style.margin = randomMargin();
	count++;
	}
	else{
		buttonMove.innerHTML = "Click Me";
		buttonMove.style.backgroundColor = randomRGB();
		buttonMove.style.margin = '3px 3px 3px 3px';
	}
}


buttonMove.onclick = function () {

	window.open('http://www.google.com','_blank');

}

////////////////////////////////////////////////////////////
/////////////////   Javascript To-Do List  /////////////////
////////////////////////////////////////////////////////////


const addBox = document.getElementById('toDo');
const addButton = document.getElementById('addTask');

addButton.onclick = function () {

	const newItem = document.getElementById('inputField').value;

	if(newItem==""){
		window.alert("Invalid Input!")
	}
	else
	{
		const newPara = document.createElement('li');
		newPara.className = 'txblack txshadow';
		addBox.appendChild(newPara);
		newPara.innerHTML = newItem;
		document.getElementById('inputField').value= ""; //clean up input field
	}

}



