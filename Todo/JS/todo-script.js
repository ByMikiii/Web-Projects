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
    if (getVisibility(list, i) == "visible") {
      document.getElementById("button" + list + i).style.visibility = "hidden";
      i = 0;
    }
  }
}

function plusTask(list) {
  for (i = 1; i <= 7; i++) {
    if (getVisibility(list, i) == "hidden") {
      document.getElementById("button" + list + i).style.visibility = "visible";
      document.getElementById("btn" + list + i).style.textDecoration = "none";
      i = 8;
    }
  }
}

function getVisibility(list, task) {
  let btnSel = document.querySelector("#button" + list + task);
  let compStyles = window.getComputedStyle(btnSel);
  let getVisibility = compStyles.getPropertyValue("visibility");
  return getVisibility;
}

// var i = 1;

// // while  {
// //   var x = document.getElementById("heading1").value;
// //   console.log(x);
// //}
