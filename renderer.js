// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

  
document.getElementById('log').innerHTML = 'Down was pressed';
window.addEventListener('keydown', function(event) { 
	let player = document.getElementById("player");
	let x = player.style.left;
	let y = player.style.top;
	if(event.keyCode == 37) {

		player.style.left = distanceToMove(x,-10);
		document.getElementById('log').innerHTML = 'Left was pressed again'
	};
	if(event.keyCode == 38) {
		player.style.top= distanceToMove(y,-10);
		document.getElementById('log').innerHTML = 'Up was pressed again'
	};
	if(event.keyCode == 39) {
		player.style.left= distanceToMove(x,10);
		document.getElementById('log').innerHTML = 'Right was pressed again'
	};
	if(event.keyCode == 40) {
		player.style.top= distanceToMove(y,10);
		document.getElementById('log').innerHTML = 'Down was pressed again'
	};
});

function distanceToMove(actualValue, toMove){
	if(actualValue === "")
		return toMove + 'px';
	else{
		return (Number(actualValue.substring(0,actualValue.length -2)) + toMove )+ 'px';
	}
}
