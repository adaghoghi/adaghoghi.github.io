//vanilla JS

var heading = document.getElementById('title')

var name = 'Alvand'

heading.innerText = "Enter " + name + "'s Information"

document.getElementById('main-section').innerHTML = '<h3>Hello World Smaller</h3>'

var paragraphs = document.getElementsByTagName('p')
console.log(paragraphs[0].innerText)

var titleText = document.getElementById('title')

//addEventListener is a function that takes two parameters: the event that we're listenting for and the function that will be run once that event is performed
titleText.addEventListener('click', function() {
	alert('you clicked me!')
})

function myFunction(){
	//if the text the user input is the same as the answer
	//create an if statement
	//compare the user input to the "correct" answer
	var letter = document.getElementById('myInput').value;
	
	if (letter === 'e'){
		alert('You guessed the correct letter!')
	}else if(letter != 'e'){
		alert('You guessed the wrong letter')
	}
}