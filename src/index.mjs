function one() {
  return;
  console.log("test");
}
function multiplier() {
  let inputValue = document.getElementById("input").innerHTML;
  let answer = inputValue * 100;
  document.getElementById("result").value = answer;
}
