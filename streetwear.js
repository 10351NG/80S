//CODIGO PARA POSTER

let button_1 = document.getElementById("btn1");

button_1.addEventListener("click", changePoster);

let image_1 = document.getElementById("img1");
let current_poster = 1;

function changePoster() {
  current_poster = current_poster + 1;
  if (current_poster == 6) {
    current_poster = 1;
  }
  let src = `./imagenes/p${current_poster}.png`;
  console.log(src);
  image_1.src = src;
}

//CODIGO PARA TIPOGRAFÌA

let button_2 = document.getElementById("btn2");

button_2.addEventListener("click", changeTypography);

let image_2 = document.getElementById("img2");
let current_typography = 1;

function changeTypography() {
  current_typography = current_typography + 1;
  if (current_typography == 6) {
    current_typography = 1;
  }
  let src = `./imagenes/t${current_typography}.png`;
  console.log(src);
  image_2.src = src;
}

//CODIGO PARA STICKERS

let button_3 = document.getElementById("btn3");

button_3.addEventListener("click", changesSticker);

let image_3 = document.getElementById("img3");
let current_sticker = 1;

function changesSticker() {
  current_sticker = current_sticker + 1;
  if (current_sticker == 4) {
    current_sticker = 1;
  }
  let src = `./imagenes/s${current_sticker}.png`;
  console.log(src);
  image_3.src = src;
}
