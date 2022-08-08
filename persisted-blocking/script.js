const openDeeplink = () => {
  const defaultUrl = "scgateway://gatewaydemo";
  location.replace(defaultUrl);
};
setTimeout(() => {
  var buttonElem = document.getElementById("button-one");
  buttonElem.disabled = false;
  openDeeplink();
  buttonElem.addEventListener("click", openDeeplink);
}, 2000);
