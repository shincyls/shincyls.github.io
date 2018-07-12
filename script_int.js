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

	let color_r = randomBetween(0,255);
	let color_g = randomBetween(0,255);
	let color_b = randomBetween(0,255);

	randomColor = "rgb(" + color_r + "," + color_g + "," + color_b + ")";

	return randomColor;

}

function randomMargin() {

	let randomMrg = "";

	let mrg_top = randomBetween(0,200);
	let mrg_right = randomBetween(0,200);
	let mrg_bottom = randomBetween(0,200);
	let mrg_left = randomBetween(0,200);

	randomMrg = mrg_top + "px " + mrg_right + "px " + mrg_bottom + "px " + mrg_left + "px";

	return randomMrg;

}

function randomMarginPct() {

	let randomMrg = "";

	let mrg_top = randomBetween(0,50);
	let mrg_right = randomBetween(0,50);
	let mrg_bottom = randomBetween(0,50);
	let mrg_left = randomBetween(0,50);

	randomMrg = mrg_top + "% " + mrg_right + "% " + mrg_bottom + "% " + mrg_left + "%";

	return randomMrg;

}

function randomBetween(min, max) {

	let randomNumber = Math.floor(Math.random()*(max-min) + min);

	return randomNumber;
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
	buttonMove.style.margin = randomMarginPct();
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

/*
const addBox = document.getElementById('toDo');
const addButton = document.getElementById('addTask');
const removeButton = document.getElementsByClassName('remove');

function addTask() {

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



function addItem() { 

		//adding text value into new Li
        let input = document.getElementById("inputField");
        let text = input.value;
        let newLi = document.createElement("li");
        addBox.appendChild(newLi);
        newLi.innerHTML = text;
        input.value = "";

        let deleteLink = document.createElement("a");
        deleteLink.className = "remove";
        deleteLink.textContent = "(x)";
        deleteLink.href = "#";
        deleteLink.addEventListener("click", removeItem);
        newLi.appendChild(deleteLink);

}

function removeItem() { 
           const parent = document.getElementById("toDo");
           const child = document.getElementById("toDo");
           parent.removeChild(child);
}


addButton.onclick = function () {addItem();}
removeButton.onclick = function () {removeItem();}
*/

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//By pressing enter

document.getElementById("myInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        newElement();  //your function of injecting the text
    }
});
