
function makeMadLib(){
	var val_noun = document.getElementById('noun').value;
	var val_adjective = document.getElementById('adjective').value;
	var val_person = document.getElementById('person').value;

	alert(val_person + ' really likes ' + val_adjective + ' ' + val_noun + '.');
}

var button = document.getElementById('lib-button')

button.addEventListener('click', makeMadLib);