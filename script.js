let target = window;
function getUrlValue() {
  const inputElem = document.getElementById("url-input");
  return inputElem.value;
}
function deeplinkAssign() {
  target.location.href = getUrlValue();
}
function deeplinkReplace() {
  target.location.replace(getUrlValue());
}
function deeplinkOpen() {
  target.open(getUrlValue());
}
function targetCurrentWindow() {
  target = window;
}
function targetParentWindow() {
  target = window.parent;
}
function logTarget() {
  alert(target ? target.location : "undefined");
}
