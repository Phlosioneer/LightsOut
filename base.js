

$('document').ready(function() {
	// Generate the game grid.
	//$('#game-container')[0].innerHTML = generateGameGrid(5, 5);

	// Draw the board as soon as the images load.
	$('img').each(function() {
			// I don't know of a better way to get both at the same time.
			return this.id == "img-off" || this.id == "img-on";
		}).imagesLoaded(function() {
			drawGameGrid(5, 5)
		});
});

function drawGameGrid(cols, rows) {
	var canvas = $('#game-canvas')[0];
	var context = canvas.getContext("2d");
	
	var imgOn = $('#img-on')[0];
	var imgOff = $('#img-off')[0];

	// Ensure the canvas is a square.
	if (canvas.width != canvas.height) {
		canvas.height = canvas.width;
	}

	// Calculate the width of each cell.
	var width = canvas.width / cols;
	var height = canvas.height / rows;

	// Draw all the cells.
	for (var x = 0; x < cols; x++) {
		for (var y = 0; y < rows; y++) {
			// TODO: Write code that actually keeps track of
			// the state of these cells.
			var img;
			if ((x + y) % 2 == 0) {
				img = imgOn;
			} else {
				img = imgOff;
			}
			
			context.drawImage(img, x * width, y * height, width - 1, height - 1);
		}
	}
}

function generateGameGrid(width, height) {

	// There's no headers.
	var header = "<thead></thead>";

	var body = "<tbody>";
	for (var y = 0; y < height; y++) {
		var row = "<tr>";

		for (var x = 0; x < width; x++) {
			var cell = "<td class='game-cell'>";
			cell += "<img src='lights_out_on.png' height='1000' width='1000'>";
			cell += "</td>";
			row += cell;
		}
		row += "</tr>";
		body += row;
	}
	body += "</tbody>"

	var table = "<table class='table'>";
	table += header + body;
	table += "</table>";
	
	return table;
}



