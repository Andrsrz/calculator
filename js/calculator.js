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
const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const EQUAL = '=';
const PERCENTAGE = '%';
const NORMAL_MODE = "normal";

/* MATH FUNCTIONS */
const add = function(x, y){ return x + y; }
const subtract = function(x, y){ return x - y; }
const multiply = function(x, y){ return x * y; }
const divide = function(x, y){ return x / y; }

function createDiv(column, row){
	/* Create H1 inside divs */
	let divID = "div" + column + "-" + row;
	let newH1 = document.createElement("h1");
	newH1.innerHTML = ONE;
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", divID);
	newDiv.setAttribute("class", "cell");
	document.getElementById('grid').appendChild(newDiv);
	document.getElementById(divID).appendChild(newH1);
}

function setCalculatorGrid(size, mode){
	rowSize = size + ONE;
	if(mode == NORMAL_MODE){
		let gridDiv = document.getElementById("grid");
		gridDiv.setAttribute("style", "grid-template-columns: repeat(" + size + ", 1fr); \
									grid-template-rows: repeat(" + rowSize + ", 1fr);");
		let input = document.createElement("div");
		input.setAttribute("class", "cell");
		input.setAttribute("style", "grid-column-start: " + ONE + "; \
										grid-column-end: " + rowSize + "; \
										grid-row-start: " + ONE + "; \
										grid-row-end: " + ONE + ";");
		document.getElementById('grid').appendChild(input);
		for(let i = 2; i <= rowSize; i++){
			for(let j = 1; j <= size; j++){
				createDiv(j, i);
				let newDiv = document.getElementById("div" + j + "-" + i);
				newDiv.setAttribute("style", "grid-column-start: " + j + "; \
												grid-column-end: " + j + "; \
												grid-row-start: " + i + "; \
												grid-row-end: " + i + ";");
			}
		}
	}
}

/* Calculator Grid */
setCalculatorGrid(FOUR, NORMAL_MODE);
