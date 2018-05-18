var randcolor = 6;
var colors = genRandColor(randcolor);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColour();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	randcolor = 3;
	 easyBtn.classList.add("selected");
	 hardBtn.classList.remove("selected");
	 colors = genRandColor(randcolor);
	 pickedColor = pickColour();
	 colorDisplay.textContent= pickedColor;
	 for(var i = 0 ; i < squares.length; i++){
	  if(colors[i]){
	  	squares[i].style.background= colors[i];
	  }else {
	  	squares[i].style.display = "none";
	  }
	  h1.style.background= "steelblue";
	}

});
hardBtn.addEventListener("click", function(){
	randcolor= 6;
	easyBtn.classList.remove("selected");
	 hardBtn.classList.add("selected");
	 colors = genRandColor(randcolor);
	 pickedColor = pickColour();
	 colorDisplay.textContent= pickedColor;

	 for(var i = 0 ; i < squares.length; i++){
	  
	  	squares[i].style.background= colors[i];
	  	squares[i].style.display = "block";
	  }
	  h1.style.background= "steelblue";
});


resetButton.addEventListener("click", function(){
	colors = genRandColor(randcolor);
	pickedColor = pickColour();
	colorDisplay.textContent= pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Color"

	for(var i = 0 ; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor= this.style.background;
		// console.log(clickedColor);
		if(clickedColor === pickedColor){
	 		messageDisplay.textContent = "Nice Guess!!"
	 		resetButton.textContent = "play again?";
	 		ChangeColors(pickedColor);
	 		h1.style.background = pickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Keep Trying";
		}
	});
}
function ChangeColors(color){
	for(var i=0; i< squares.length ; i++){
		squares[i].style.background = color;
	}
}
function pickColour(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function genRandColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*255 +1 );
	var g = Math.floor(Math.random()*255 +1 );
	var b = Math.floor(Math.random()*255 +1 );
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}