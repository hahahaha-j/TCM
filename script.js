import { rainbowCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";

document.addEventListener('DOMContentLoaded', () => {
  function changeAccentColor() {
    var accentColor = document.getElementById("accent-picker").value;
    var accentElements = document.querySelectorAll('.accent');
    for (var i = 0; i < accentElements.length; i++) {
      accentElements[i].style.color = accentColor;
    }
    var buttons = document.querySelectorAll('nav a, main a');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = accentColor;
    }
  }
  
  document.getElementById("accent-picker").onchange = changeAccentColor;
  
  new rainbowCursor();
});
