var cat = document.getElementById("cat");
function onClick(x) {
	var hat = document.getElementById("hat"); 
	hat.style.left = x.clientX - 53 + "px";
	hat.style.top = x.clientY - 25 + "px";
};
cat.addEventListener("click", onClick);