console.log(document.querySelectorAll("footer"));

window.addEventListener('load', function () {
  document.querySelector("footer").children[0]?.remove();
})
