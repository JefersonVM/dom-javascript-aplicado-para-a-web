const text = document.querySelector(".text");
const btnUnderline = document.querySelector(".btn-underline");
const btnItalic = document.querySelector(".btn-italic");
const btnBold = document.querySelector(".btn-bold");
const currentFontSize = document.querySelector(".current-font-size");
const btnDecrementFont = document.querySelector(".btn-decrement-font");
const btnIncrementFont = document.querySelector(".btn-increment-font");
const btnRed = document.querySelector(".btn-red");
const btnBlue = document.querySelector(".btn-blue");
const btnPurple = document.querySelector(".btn-purple");
const btnBlack = document.querySelector(".btn-black");

btnUnderline.onclick = function () {
  if (text.style.textDecoration === "underline") {
    text.style.textDecoration = "none";
  } else {
    text.style.textDecoration = "underline";
  }
};

btnItalic.onclick = function () {
  if (text.style.fontStyle === "italic") {
    text.style.fontStyle = "normal";
  } else {
    text.style.fontStyle = "italic";
  }
};

btnBold.onclick = function () {
  if (text.style.fontWeight === "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "bold";
  }
};

const getCurrentFontSize = () => {
  const currentFontSize = text.style.fontSize.split("px")[0];

  return parseInt(currentFontSize) || 16;
};

btnDecrementFont.onclick = function () {
  if (getCurrentFontSize() > 12) {
    text.style.fontSize = `${getCurrentFontSize() - 2}px`;
  }

  currentFontSize.textContent = getCurrentFontSize();
};

btnIncrementFont.onclick = function () {
  text.style.fontSize = `${getCurrentFontSize() + 2}px`;

  currentFontSize.textContent = getCurrentFontSize();
};
btnRed.onclick = function () {
  if (text.style.color === "red") {
    text.style.color = "black";
  } else {
    text.style.color = "red";
  }
};

btnBlue.onclick = function () {
  if (text.style.color === "blue") {
    text.style.color = "black";
  } else {
    text.style.color = "blue";
  }
};

btnPurple.onclick = function () {
  if (text.style.color === "purple") {
    text.style.color = "black";
  } else {
    text.style.color = "purple";
  }
};

btnBlack.onclick = function () {
  text.style.color = "black";
};
