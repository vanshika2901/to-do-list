// $("li").on("click",function(){
	
// 	if($(this).css("color")=== "rgb(128, 128, 128)")
// 	{
// 		$(this).css("color","black");
// 		$(this).css("text-decoration","none");
// 	}
// 			$(this).css("color","gray");
// 	$(this).css("text-decoration","line-through");

// 	//we can write this two line code into a single line using object
// 	else{
// 			$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 	});
// 	}

// });
	
//this is a long code we can do this all using a simple class and toggling it
$("ul").on("click","li",function(){ //this code tells that when an li inside of the ul is clicked fire the code
	$(this).toggleClass("complete");
});
// $("li").on("hover",function(){
// alert("hi");
// });
$("ul").on("click","span",function(event){ //here code runs when the span inside of the ul is clicked
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); //here because of this li will not run and this will not turn li
	//into gray and line-through 
	//to stop event bubbling
});
$("input[type='text']").keypress(function(event){
if(event.which===13) {
	var todotext= $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todotext + "</li");

}
});
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});
