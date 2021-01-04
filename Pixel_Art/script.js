window.onload = function () {
  let colorPalette = document.querySelector('#color-palette');
  
  function createColorPallet(colors) {
    for (index in colors) {
      let colorDiv = createColor(colors[index]);
      colorPalette.appendChild(colorDiv);
    }
  };

  createColorPallet(generateRandomColors(3));

  function createColor(color) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = color;
    return colorDiv;
  };

  function randomColors() {
    let randomR = Math.round(Math.random() * 256 );
    let randomG = Math.round(Math.random() * 256);
    let randomB = Math.round(Math.random() * 256);

    return 'rgb(' + randomR + ', ' + randomG + ', ' + randomB + ')'
  }

  function generateRandomColors (input) {
    let colorArray = ['rgb(0, 0, 0)']
    for (cont = 0; cont < input; cont += 1) {
      let newColor = randomColors();
      colorArray.push(newColor);
    }
    return colorArray
  }

  generateRandomColors(3)

  let selected = document.getElementsByClassName('selected');
  document.querySelector('div').classList.add('selected');

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      selected[0].className = 'color';
      event.target.classList.add('selected');
      event.target.backgroundColor = event.target.style.backgroundColor;
      console.log(selected.length)
    } else if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = selected[0].style.backgroundColor ;
    }
  });

  let clearButton = document.querySelector('#clear-board');

  let pixel = document.getElementsByClassName('pixel');

  clearButton.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
    selected[0].className = 'color';
    document.querySelector('div').classList.add('selected');
  });

  let pixelBoard = document.querySelector('#pixel-board');

  function createLine(input) {
    for (cont = 0; cont < input; cont += 1) {
      let trDiv = createTrDiv();
      pixelBoard.appendChild(trDiv);
      for (cont = 0; cont < input; cont += 1) {
        let pixelDiv = createPixelDiv();
        trDiv.appendChild(pixelDiv);
      }
    }
    return pixelBoard
  }

  function createTrDiv () {
    let trDiv = document.createElement('div');
    trDiv.className = 'tr';
    return trDiv;
  }

  function createPixelDiv () {
    let pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    return pixelDiv;
  }

  let boardButton = document.querySelector('#generate-board');
  let boardInput = document.querySelector('#board-size');

  function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
  }

  repeat(function () {createLine(5)}, 5);

  boardButton.addEventListener('click', function () {
    if (boardInput.value <= 5 && boardInput.value != '') {
      pixelBoard.innerHTML = '';
      repeat(function () {createLine(5)}, 5);
    } else if (boardInput.value >= 50) {
      pixelBoard.innerHTML = '';
      repeat(function () {createLine(50)}, 50);
    } else if (boardInput.value > 5 && boardInput.value < 50){
      pixelBoard.innerHTML = '';
      repeat(function () {createLine(boardInput.value)}, boardInput.value);
    } else if (boardInput.value == '') {
      (alert('Board inválido!'))
    }
  });
};
