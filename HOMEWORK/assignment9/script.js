function getCount() {
	var count = document.getElementsByTagName('p').length;
//	document.getElementById('solution').innerHTML = count;
	alert("There are " + count + " paragraph tags on this page.")
}

function firstDiv() {
	var div = document.getElementById('first');
	var count = div.getElementsByTagName('p');
	alert("There are " + count.length + " paragraph tags in the first div.")
}

function secondDiv() {
	var div = document.getElementById('second');
	var count = div.getElementsByTagName('p');
	alert("There are " + count.length + " paragraph tags in the first div.")
}