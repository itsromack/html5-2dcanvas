function drawCanvas()
{
	var c = document.getElementById('myCanvas');
	var ctx = c.getContext('2d');
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 800, 800);

	// draw line
	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();

	// draw circle
	ctx.beginPath();
	ctx.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx.stroke();

	// draw text
	ctx.font = '30px Arial';
	ctx.fillText('Hello World', 400, 350);
	ctx.strokeText('Hello Canvas', 500, 450);

	// linear gradient
	var lg = ctx.createLinearGradient(0, 0, 200, 0);
	lg.addColorStop(0, 'red');
	lg.addColorStop(1, 'white');
	ctx.fillStyle = lg;
	ctx.fillRect(100, 500, 400, 200);

	// circular gradient
	var cg = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
	cg.addColorStop(0, 'gold');
	cg.addColorStop(1, 'silver');
	ctx.fillStyle = cg;
	ctx.fillRect(300, 250, 200, 250);

	// draw image
	var img = document.getElementById('scream');
	ctx.drawImage(img, 250, 200)
}
