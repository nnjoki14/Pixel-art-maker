// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePicker = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
console.log(height.value);
console.log(width.value);

function makeGrid() {

	for(let r = 0; r < height.value; r++){
		const row = canvas.insertRow(r);
		for(let c = 0; c < width.value; c++){
			row.insertCell(c);
		}
	}
	$('table').on('click', function(){
       $(event.target).css('background-color', color.value);
});
}

function clearGrid(){
	while(canvas.firstChild){
		canvas.removeChild(canvas.firstChild);
	}
}

$('button').on('click',function(e){
	e.preventDefault();
	clearGrid();
	makeGrid();
});
