function flip() {
  var random = Math.floor(Math.random() * 2 + 1);

  if (random === 1) {
    document.getElementById("result").innerHTML = "TAILS";
  } else if (random === 2) {
    document.getElementById("result").innerHTML = "HEADS";
  }
}
