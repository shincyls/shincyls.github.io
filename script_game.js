//Default Global Variables

const ticTacToe = {
	cBox: [["","",""],["","",""],["","",""]],
	pMove: 0,
	pTurn: 1,
	gCount: 1,
	tCount: 0,
	wCheck: false,
	sBox: ["","","",""],
	user: [["Player 1","X","blue",0],["Player 2","O","red",0]],
	boardSize: 3
}
console.log(ticTacToe);

let currentBox = ticTacToe.cBox;
const player = ticTacToe.user;
let currentPlayer = 0;
let currentTurn = 1;
let currentGame = 1;
let winnerCheck = false;
let winTargetId;
let speakerBox = document.getElementById('player-turn');

const gameRound = document.getElementById('round');
const p1Score = document.getElementById('p1Score');
const p2Score = document.getElementById('p2Score');

//Calling Function to defaulting neccessary

function playerTurnString(thisPlayer){ //0 = Player 1, 1 = Player 2
	let string;
	let string1;
	let string2;
	string1 = "Game : " + currentGame + " </br> Player : " + (currentPlayer+1) + " <span style='color:" + player[currentPlayer][2] + "'>" + player[currentPlayer][1] + "</span>";
	//string2 = "P1 : " + player[0][3] + " | P2 : " + player[1][3] + " | Tie : " + tieCount;
	//string = string1 + "</br>" + string2 ;
	return string1;
}

function resetGame(){
	
	const allBoxReset = document.getElementsByClassName('game-box');
	currentTurn = 1;
	currentPlayer = 0;
	winnerCheck = false;
	for(num in allBoxReset){
		allBoxReset[num].innerHTML = "";
		let check = allBoxReset[num].style;
	if(check!=null){
			allBoxReset[num].removeAttribute("style");
			allBoxReset[num].classList.remove("blinking");
		}
	}
	document.getElementById('player-turn').innerHTML = "";
	winTargetId = ["","","",""];
	speakerBox.innerHTML = playerTurnString(currentPlayer);
	currentBox = [["","",""],["","",""],["","",""]];
}


function togglePlayerTurn() {

	if(winnerCheck == false && currentTurn!=9){
		if(currentPlayer === 0) {
			currentPlayer = 1;
		}
		else if (currentPlayer === 1) {
			currentPlayer = 0;
		}
		speakerBox.innerHTML = playerTurnString(currentPlayer);
		currentTurn++;
	}
}


//Update Button

function updateBox(targetID,targetRow,targetColumn){
	
	if(winnerCheck === false){
		const selectBox = document.getElementById(targetID);
		if(selectBox.innerHTML === ""){
			let amendBox=player[currentPlayer][1];
			let amendColor=player[currentPlayer][2];
			currentBox[targetRow][targetColumn] = amendBox;
			selectBox.innerHTML = "<span " + "style='color:" + amendColor + "';>" + amendBox + "</span>"; 
			console.log("Current Turn: " + currentTurn + " : Player " + (currentPlayer+1) + " is clicked " + targetID + " with " + amendBox);
			checkResult();
			togglePlayerTurn();
		}
		else{window.alert("You cannot select box which is Ticked");}
	}
	else{window.alert("Plag Again or Reset Game");}
}

//Check Winning Condition for each time update and perform series of action
function checkResult() {

	if(winnerCheck == false){

			//Step 1: Storing the result of each Winning Possibility and its Element IDs
			let winArray = [
			(currentBox[0][0] + currentBox[0][1] + currentBox[0][2]) + ",row-1-1,row-1-2,row-1-3", //first row strike
			(currentBox[1][0] + currentBox[1][1] + currentBox[1][2]) + ",row-2-1,row-2-2,row-2-3", //second row strike
			(currentBox[2][0] + currentBox[2][1] + currentBox[2][2]) + ",row-3-1,row-3-2,row-3-3", //third row strike
			(currentBox[0][0] + currentBox[1][0] + currentBox[2][0]) + ",row-1-1,row-2-1,row-3-1", //first column strike
			(currentBox[0][1] + currentBox[1][1] + currentBox[2][1]) + ",row-1-2,row-2-2,row-3-2", //second columen strike
			(currentBox[0][2] + currentBox[1][2] + currentBox[2][2]) + ",row-1-3,row-2-3,row-3-3", //third column strike
			(currentBox[0][0] + currentBox[1][1] + currentBox[2][2]) + ",row-1-1,row-2-2,row-3-3", //leftTop-rightBottom diagonal strike
			(currentBox[0][2] + currentBox[1][1] + currentBox[2][0]) + ",row-3-1,row-2-2,row-1-3"//rightTop-leftBottom diagnoal strike
			]

			//Step 2: Checking each of the Possibility whether it met the criteria and grab its Element IDs
			for(num in winArray){
				if(winArray[num].substring(0,ticTacToe.boardSize) == "X".repeat(ticTacToe.boardSize) || winArray[num].substring(0,ticTacToe.boardSize) == "O".repeat(ticTacToe.boardSize) ){
				console.log("Winner Detected! with " + winArray[num]);
				winnerCheck = true;
				winTargetId = winArray[num].split(',');	
				}
				console.log(winTargetId); //Get 
			}

			//Step 3: Detect if the game is TIE and return result
			if (currentTurn == 9 && winnerCheck == false){
				speakerBox.innerHTML = "The Game is Tie!";
			}

			//Step 4: Detect if the game is WON and return result
			else if (winnerCheck == true){

				for(k=1; k<=3; k++){
					document.getElementById(winTargetId[k]).style.backgroundColor = "yellow";
					document.getElementById(winTargetId[k]).classList.add("blinking");
				}
				//Update speaker box
				speakerBox.innerHTML = "Player " + (currentPlayer+1) + " has Won This Round!";
				player[currentPlayer][3]++; //Player Winnning count
			}
	}
}

//Play Again Button
function playAgain() {
	resetGame();
	currentGame++;
}

//Reset Score Button
function resetBoard() {
	resetGame();
	currentPlayer = 0;
	currentGame = 1;
}