const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const SEVEN = 7;
const EIGHT = 8;
const NINE = 9;
const POINT = '.';
const CLEAR = 'C';
const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const EQUAL = '=';
const NORMAL_MODE = "normal";
const CELLS = [SEVEN, EIGHT, NINE, DIVIDE, FOUR, FIVE, SIX, MULTIPLY, ONE, TWO, THREE, MINUS, ZERO, CLEAR, EQUAL, PLUS];
const OPERATORS = [DIVIDE, MULTIPLY, MINUS, PLUS];
const NUMBERS = [SEVEN, EIGHT, NINE, FOUR, FIVE, SIX, ONE, TWO, THREE, ZERO];

/* MATH FUNCTIONS */
const add = function(x, y){ return x + y; }
const subtract = function(x, y){ return x - y; }
const multiply = function(x, y){ return x * y; }
const divide = function(x, y){ return x / y; }

function operate(x, y, operator){
	if(operator == PLUS)
		add(x, y);
	else if(operator == MINUS)
		subtrat(x, y);
	else if(operator == MULTIPLY)
		multiply(x, y);
	else if(operator == DIVIDE)
		divide(x, y);
}

function createDiv(innerChar){
	/* Create H1 inside divs */
	let divID = "div" + CELLS[innerChar];
	/* Create inner character */
	let newH1 = document.createElement("h1");
	newH1.innerHTML = CELLS[innerChar];
	/* Set attributes to de div */
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", divID);

	if(NUMBERS.includes(CELLS[innerChar]))
		newDiv.setAttribute("class", "cell number");
	else if(OPERATORS.includes(CELLS[innerChar])){
		newDiv.setAttribute("class", "cell operator");
	}else if(CELLS[innerChar] == CLEAR){
		newDiv.setAttribute("class", "cell clear");
	}else{
		newDiv.setAttribute("class", "cell equal");
	}
	/* Add to html */
	document.getElementById('grid').appendChild(newDiv);
	document.getElementById(divID).appendChild(newH1);
}

function setCalculatorGrid(size, mode){
	/* Ser the actual size for the rows */
	rowSize = size + ONE;
	/* Create Calculator in Normal Mode */
	if(mode == NORMAL_MODE){
		/* Create the grid */
		let gridDiv = document.getElementById("grid");
		gridDiv.setAttribute("style", "grid-template-columns: repeat(" + size + ", 1fr); \
									grid-template-rows: repeat(" + rowSize + ", 1fr);");
		/* Create the input */
		let inputh1 = document.createElement("h1");
		inputh1.innerHTML = ZERO;
		inputh1.setAttribute("id", "input");
		inputh1.setAttribute("style", "grid-column-start: " + ONE + "; \
										grid-column-end: " + rowSize + "; \
										grid-row-start: " + ONE + "; \
										grid-row-end: " + ONE + ";");
		document.getElementById('grid').appendChild(inputh1);
		/* Create the number and operators cells */
		let innerChar = 0;
		for(let i = 2; i <= rowSize; i++){
			for(let j = 1; j <= size; j++){
				createDiv(innerChar); /* Creation */
				let newDiv = document.getElementById("div" + CELLS[innerChar]);
				newDiv.setAttribute("style", "grid-column-start: " + j + "; \
												grid-column-end: " + j + "; \
												grid-row-start: " + i + "; \
												grid-row-end: " + i + ";");
				innerChar++;
			}
		}
	}
}

function setNumberOnClickEvents(numbers){
	for(let i = 0; i < numbers.length; i++){
		let div = document.getElementById("div" + numbers[i]);
		div.setAttribute("onclick", "console.log(" + numbers[i] + ");");
	}
}

function setOperatorsOnClickEvents(operators){
	for(let i = 0; i < operators.length; i++){
		let div = document.getElementById("div" + operators[i]);
		div.setAttribute("onclick", "console.log('" + operators[i] + "');");
	}
}

function setEqualOnClickEvent(){
	let div = document.getElementById("div=");
	div.setAttribute("onclick", "console.log('=')");
}

function setClearOnClickEvent(){
	let div = document.getElementById("divC");
	div.setAttribute("onclick", "console.log('clear')");
}

/* Calculator Grid */
setCalculatorGrid(FOUR, NORMAL_MODE);
setNumberOnClickEvents(NUMBERS);
setOperatorsOnClickEvents(OPERATORS);
setEqualOnClickEvent();
setClearOnClickEvent();
