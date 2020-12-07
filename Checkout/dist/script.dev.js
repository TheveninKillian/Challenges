"use strict";

var total = document.querySelector(".total-price");
var shipping = document.querySelector(".shipping-price");
var shippingPrice = 19;

var reducer = function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
};

var items = document.querySelectorAll(".wrapper__purchase-item");
var tabPrice = [];
var resultTotal;
shipping.textContent = "$".concat(shippingPrice);
items.forEach(function (element, key) {
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
  tabPrice.push(newPriceNum);
  resultTotal = tabPrice.reduce(reducer, shippingPrice);
  total.textContent = "$".concat(resultTotal.toFixed(2));
  btnUp.addEventListener("click", function () {
    inputNum.stepUp();
    var resultNew = newPriceNum * inputNum.value;
    var resultOld = oldPriceNum * inputNum.value;
    newPrice.textContent = resultNew.toFixed(2);
    oldPrice.textContent = resultOld.toFixed(2);
    totalPrice(key, resultNew.toFixed(2));
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
      totalPrice(key, resultNew.toFixed(2));
    }
  });
});

function totalPrice(key, result) {
  tabPrice.splice(key, 1, parseFloat(result));
  var resultTotal = tabPrice.reduce(reducer, shippingPrice);
  total.textContent = "$".concat(resultTotal.toFixed(2));
}

(function () {
  var form = document.querySelector("form");
  var tooltip = document.querySelector(".tooltip");
  var inputs = document.querySelectorAll("input[type=text], input[type=email], input[type=number], input[list]");
  var inputCheck = document.querySelector("input[type=checkbox]");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    tooltip.style.opacity = 1;

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    inputCheck.checked = false;
    setTimeout(function () {
      tooltip.style.opacity = 0;
    }, 2000);
  });
})();