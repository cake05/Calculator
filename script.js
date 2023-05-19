console.log("Script Started");

//global variable used to identify equation box
let p = document.getElementById("my-equation");
let historybox = document.getElementById("history-text");


// find selected key and append to equation box
function appendEquation(key) {
  p.innerHTML = p.innerHTML + key;
  p.value = key;
  console.log(p.value);
  historybox.append(p.value);

}

//this is what solves the equation
function enter() {
  p.innerHTML = eval(p.innerHTML);
  historybox.append("=");
  historybox.append(p.innerHTML);
  historybox.append("  ,  ")
}

//clears the equation box
function deleteAll() {
  p.innerHTML = "";
}

//clears the history box history
function clearHistoryBox() {
  historybox.innerHTML = "";
}

