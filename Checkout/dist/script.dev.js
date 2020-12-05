"use strict";

var items = document.querySelectorAll(".wrapper__purchase-item");
var total = document.querySelector(".total-price");
items.forEach(function (element) {
  var container = element.childNodes[3];
  var price = container.childNodes[3];
  var newPrice = price.childNodes[2];
  var newPriceNum = parseFloat(price.childNodes[2].textContent);
  var oldPrice = price.childNodes[5];
  var oldPriceNum = parseFloat(price.childNodes[5].textContent);
  var quantity = container.childNodes[5];
  var btnDown = quantity.childNodes[1];
  var inputNum = quantity.childNodes[3];
  var btnUp = quantity.childNodes[5];
  btnUp.addEventListener("click", function () {
    inputNum.stepUp();
    var resultNew = newPriceNum * inputNum.value;
    var resultOld = oldPriceNum * inputNum.value;
    newPrice.textContent = resultNew.toFixed(2);
    oldPrice.textContent = resultOld.toFixed(2);
  });
  btnDown.addEventListener("click", function () {
    if (inputNum.value > 1) {
      var initNewPrice = parseFloat(element.childNodes[3].childNodes[3].childNodes[2].textContent);
      var initOldPrice = parseFloat(element.childNodes[3].childNodes[3].childNodes[5].textContent);
      inputNum.stepDown();
      var resultNew = initNewPrice - newPriceNum;
      var resultOld = initOldPrice - oldPriceNum;
      newPrice.textContent = resultNew.toFixed(2);
      oldPrice.textContent = resultOld.toFixed(2);
    }
  });
});