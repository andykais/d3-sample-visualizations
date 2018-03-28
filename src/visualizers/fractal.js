const workspace = div => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const width = 600
  const height = 400
  canvas.width = width
  canvas.height = height
  div.appendChild(canvas)

  let creal = -.8
  let cimag = .156;
  let frame = 0;

  let pallette = []; //an array that stores the RGB combinations

  function julia() {
    canvas.fillStyle = '#1f1fff'
    context.fillRect(0, 0, width, height)
    for (let y = 0; y < height / 4; y++) {
      for (let x = 0; x < width / 4; x++) {
        let cx = -2 + x / ( width / 16 );
        let cy = -2 + y / ( height / 16 );
        let i = 0;

        do {
          const xt = cx * cx - cy * cy + creal;
          cy = 2 * cx * cy + cimag;
          cx = xt;
          i++;
        }
        while ((cx * cx + cy * cy < 4) && i < 25);

        //i=i.toString(16); - commented out since not needed in this version
        if (pallette[i] !== '#1f1fff') {
          context.beginPath();
          context.fillStyle = pallette[i];
          context.fillRect(x * 4, y * 4, 4, 4);
        }
      }
    }
    frame++;
    creal = -.8 + .6 * Math.sin(frame / (3.14 * 20));
    cimag = .156 + .4 * Math.cos(frame / (3.14 * 40));
    window.requestAnimationFrame(julia);
  }

  for (let x = 0; x < 9; x++) // this loop populates the color pallette array
  {
    let color = (31 * x).toString(16); // convert the number to hex
    if (color.length == 1) color = '0' + color; // add a zero in front if only one hex digit
    pallette[x] = "#" + color + color + 'ff'; // colors 0-8: the Red and Green components change, Blue=FF
    pallette[x + 8] = '#00ff' + color; // colors 8-16: the Blue component changes, Red and Green=FF
    pallette[17 + x] = "#" + color + '0000'; // colors 17-25: the Red component changes, Green and Blue=0
  }

  julia()
}
export default workspace
