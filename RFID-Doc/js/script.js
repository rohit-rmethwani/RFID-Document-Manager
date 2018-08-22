s$(function(){
	performOperations();
});
function performOperations(){
	
	var canvas=document.getElementById("my-canvas");
	var context = canvas.getContext("2d");
	
	//getContext is just like getContentPane() of java.
	
	var i=30;
	var j=55;
	var x=240;
	var y=30;
	context.fillRect(i,j,x,y);
	context.stroke();
	//stroke() draws and shows the data.
	
	//On method is from jQuery sepcifies "on" what "event" what "function" should be performed.
	//clearRect() clears the drawn data on canvas.
	//originalEvent gives bound event with current object as we are using "on" like "this.event".
	//wheelDelta gives scroll values.
	$('#my-canvas').on('mousewheel', function(e){
		context.clearRect(0, 0, canvas.width, canvas.height);
		if(e.originalEvent.wheelDelta > 0) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(i-=7,j-=7,x+=15,y+=15);
			context.stroke();
		}
		else {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(i+=7,j+=7,x-=15,y-=15);
			context.stroke();
		}
	});
	
//	NOTE:
//	IT WILL ONLY WORK ONLY IF CURSOR IS OVER CANVAS AREA!!
}
