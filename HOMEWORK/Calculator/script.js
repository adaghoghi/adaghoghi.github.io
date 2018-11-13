function squareNumber(num) {
	var num = document.getElementById("square-input").value;
	var x = num*num
	document.getElementById('solution').innerHTML = x;
}

var button = document.getElementById('square-button')
button.addEventListener('click', squareNumber())

function halfNumber(num) {
	var num = document.getElementById("half-input").value;
	var x = num/2
	document.getElementById('solution').innerHTML = x;
}

var button1 = document.getElementById('half-button')
button1.addEventListener('click', halfNumber())

function percentOf(num1, num2) {
	var num1 = document.getElementById('percent1-input').value
	var num2 = document.getElementById('percent2-input').value
	var x = (num1/num2) * 100
	document.getElementById('solution').innerHTML = x;
}

var button2 = document.getElementById('percent-button')
button2.addEventListener('click', percentOf())

function areaCircle(num) {
	var num = document.getElementById("area-input").value; 
	var x = num*num*Math.PI
	var y = Math.round(x*100)/100
	document.getElementById('solution').innerHTML = y;
}

var button3 = document.getElementById('circle-button')
button3.addEventListener('click', areaCircle())