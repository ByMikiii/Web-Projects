let i = 1;
function pushButton() {
  if (i === 1) {
    document.getElementById("todo1").style.textDecoration = "line-through";
    i++;
  } else {
    document.getElementById("todo1").style.textDecoration = "none";
    i = 1;
  }
  console.log(i);
}
