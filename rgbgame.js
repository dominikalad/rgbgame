var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var b1 = document.querySelector("#b1");
var modeButtons=document.querySelectorAll(".mode");


init();

function init(){

	setupModeButtons();
	setupSquares();
	choosingColors();
}

function setupModeButtons(){
		//mode buttons event listeners
	for(var i=0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numSquares=3: numSquares=6;
			choosingColors();
		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grabbing color of picked square
			var clickedColor = this.style.backgroundColor;
			//comparing if its picked color
			if(clickedColor===pickedColor){
				messageDisplay.textContent="Correct!";
				changeColors(clickedColor);	
				h1.style.backgroundColor = clickedColor;
				b1.textContent="PLAY AGAIN?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent="Try again!";
			}
			
			});
	}
}

function choosingColors(){
	colors = generateRandomColors(numSquares);
//choosing one color for the display
	pickedColor=pickColor();
//put the text which color was picked
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	b1.textContent="NEW COLORS";
//coloring and hiding if there are 3 squares
	for(var i=0; i<squares.length; i++){ 
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	};
	h1.style.backgroundColor = "steelblue";
};

b1.addEventListener("click", function(){
	choosingColors();
});


function changeColors(color){
	for(var i=0;i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

//choosing one color for the display
function pickColor()
{
	var random = Math.floor(Math.random() *colors.length);
	return colors[random];
};

//creating random colors
function randomColor(){

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g + ", "+ b +")";
};

//generating random colors for squares
function generateRandomColors(num){
//creating an array for colors
	var arr=[];
//choosing a color for each index in array
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
};



