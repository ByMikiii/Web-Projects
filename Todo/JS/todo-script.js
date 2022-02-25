function pushButton(button) {
  let btn = "#btn" + button;
  let btnSel = document.querySelector(btn);
  let compStyles = window.getComputedStyle(btnSel);
  let textDec = compStyles.getPropertyValue("text-Decoration");

  if (textDec == "rgb(0, 0, 0)") {
    document.getElementById("btn" + button).style.textDecoration =
      "line-through 2px";
  } else if (textDec == "line-through 2px rgb(0, 0, 0)") {
    document.getElementById("btn" + button).style.textDecoration = "none";
  }
}

function minusTask(list) {
  for (i = 7; i > 0; i--) {
    if (getDisplay(list, i) == "block") {
      document.getElementById("button" + list + i).style.display = "none";
      i = 0;
    }
  }
}

function plusTask(list) {
  for (i = 1; i <= 7; i++) {
    if (getDisplay(list, i) == "none") {
      document.getElementById("button" + list + i).style.display = "block";
      i = 8;
    }
  }
}

function getDisplay(list, task) {
  let btnSel = document.querySelector("#button" + list + task);
  let compStyles = window.getComputedStyle(btnSel);
  let getDisplay = compStyles.getPropertyValue("display");
  return getDisplay;
}
