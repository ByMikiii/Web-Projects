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
