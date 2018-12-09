$(document).ready(function(){
  //all of the jquery that you add can go inside of this global function
	  console.log('The document is ready!')
	//function that fades the paragraph text in and out
	$('#btn1').click(function(){
		$('p').fadeOut(2000)
	})
	$('#btn2').click(function(){
		$('p').fadeIn(2000)
	})
	
	$('#btn3').click(function(){
		$('p').slideUp()
	})
	
	$('#btn4').click(function(){
		$('p').slideDown()
	})
})