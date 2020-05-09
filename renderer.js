// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function loadCoins(){
	let gameContainer = document.getElementById("game-container");
	for(let i=0;i<462;i++){
		let img = document.createElement('img');
		img.src = "./assets/coin.gif";
		img.className = "coin";
		gameContainer.appendChild(img);
	}
}
loadCoins();
window.addEventListener('keydown', function(event) { 
	let player = document.getElementById("player");
	let x = player.style.left;
	let y = player.style.top;
	if(event.keyCode == 37) {
		player.style.left = distanceToMove(x,-10,'Left');
		player.style.transform ='rotate(180deg)';
		document.getElementById('log').innerHTML = 'Left was pressed again'
	};
	if(event.keyCode == 38) {
		player.style.top= distanceToMove(y,-10,'Up');
		player.style.transform ='rotate(270deg)';
		document.getElementById('log').innerHTML = 'Up was pressed again'
	};
	if(event.keyCode == 39) {
		player.style.left= distanceToMove(x,10,'Right');
		player.style.transform ='rotate(0deg)';
		document.getElementById('log').innerHTML = 'Right was pressed again'
	};
	if(event.keyCode == 40) {
		player.style.top= distanceToMove(y,10,'Down');
		player.style.transform ='rotate(90deg)';
		document.getElementById('log').innerHTML = 'Down was pressed again'
	};
});

function distanceToMove(actualValue, toMove, Direction){
	if(!boundaryCheck(toMove,Direction))
		return actualValue;
	if(actualValue === "")
		return toMove + 'px';
	else{
		return (Number(actualValue.substring(0,actualValue.length -2)) + toMove )+ 'px';
	}
}

function boundaryCheck(toMove, Direction){
	let player = document.getElementById("player");
	let left = player.style.left;
	let top = player.style.top;
	if(Direction === 'Left'){
		if(left === "" || left === "0px")
			return false;
	}
	if(Direction === 'Up'){
		if(top === "" || top === "0px")
			return false;
	}
	if(Direction === 'Right'){
		if(left === "560px")
			return false;
	}
	if(Direction === 'Down'){
		if(top === "350px")
			return false;
	}
	return true;
}
