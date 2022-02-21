const getInfo = ;

let i = 1;
function pushButton(button) {
  if (document.getElementById("btn" + button).style.textDecoration != "none") {
    document.getElementById("btn" + button).style.textDecoration =
      "line-through";
  } else if (
    document.getElementById("btn" + button).style.textDecoration ==
    "line-through"
  ) {
    document.getElementById("btn" + button).style.textDecoration = "none";
    i = 1;
  }
  console.log(i);
}
