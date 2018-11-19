//var ref = document.getElementsByTagName('img')[0];
//ref.style.left = '0px'
//
//function catWalk(){
//	var oldLeft = parseInt(ref.style.left);
//	var newLeft = oldLeft + 1;
//	ref.style.left = newLeft + 'px';
//}
//
//window.setInterval(catWalk, 10)
var ref = document.getElementsByTagName('img')[0];
ref.style.left = '0px'

function catWalk(){
	var oldLeft = parseInt(ref.style.left);
	if (oldLeft >= window.innerWidth) {
		oldLeft = -300
	}
	var newLeft = oldLeft + 1
	ref.style.left = newLeft + 'px';
}

window.setInterval(catWalk, 10)