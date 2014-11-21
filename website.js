window.onscroll = function() {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  var possibleScroll = document.body.clientWidth / 2048 * 1360 - 350;
  var scroll = (top - 50) / 350 * possibleScroll;
  document.getElementById("scroll").style.backgroundPosition= "0px -" + (top - 50 > 0 ? scroll : 0) + "px";
};