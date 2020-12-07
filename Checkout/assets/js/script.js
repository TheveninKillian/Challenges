const total = document.querySelector(".total-price");
const shipping = document.querySelector(".shipping-price");
const shippingPrice = 19;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let items = document.querySelectorAll(".wrapper__purchase-item");
let tabPrice = [];
let resultTotal;

shipping.textContent = `$${shippingPrice}`;

items.forEach((element, key) => {
  const container = element.childNodes[3];

  const price = container.childNodes[3];
  let newPrice = price.childNodes[2];
  let newPriceNum = parseFloat(price.childNodes[2].textContent);
  let oldPrice = price.childNodes[5];
  let oldPriceNum = parseFloat(price.childNodes[5].textContent);

  const quantity = container.childNodes[5];
  const btnDown = quantity.childNodes[1];
  const inputNum = quantity.childNodes[3];
  const btnUp = quantity.childNodes[5];

  tabPrice.push(newPriceNum);

  resultTotal = tabPrice.reduce(reducer, shippingPrice);

  total.textContent = `$${resultTotal.toFixed(2)}`;

  btnUp.addEventListener("click", () => {
    inputNum.stepUp();

    let resultNew = newPriceNum * inputNum.value;
    let resultOld = oldPriceNum * inputNum.value;

    newPrice.textContent = resultNew.toFixed(2);
    oldPrice.textContent = resultOld.toFixed(2);

    totalPrice(key, resultNew.toFixed(2));
  });

  btnDown.addEventListener("click", () => {
    if (inputNum.value > 1) {
      let initNewPrice = parseFloat(
        element.childNodes[3].childNodes[3].childNodes[2].textContent
      );
      let initOldPrice = parseFloat(
        element.childNodes[3].childNodes[3].childNodes[5].textContent
      );

      inputNum.stepDown();

      let resultNew = initNewPrice - newPriceNum;
      let resultOld = initOldPrice - oldPriceNum;

      newPrice.textContent = resultNew.toFixed(2);
      oldPrice.textContent = resultOld.toFixed(2);

      totalPrice(key, resultNew.toFixed(2));
    }
  });
});

function totalPrice(key, result) {
  tabPrice.splice(key, 1, parseFloat(result));

  let resultTotal = tabPrice.reduce(reducer, shippingPrice);

  total.textContent = `$${resultTotal.toFixed(2)}`;
}

(function () {
  const form = document.querySelector("form");
  const tooltip = document.querySelector(".tooltip");

  const inputs = document.querySelectorAll(
    "input[type=text], input[type=email], input[type=number], input[list]"
  );
  const inputCheck = document.querySelector("input[type=checkbox]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    tooltip.style.opacity = 1;

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    inputCheck.checked = false;

    setTimeout(() => {
      tooltip.style.opacity = 0;
    }, 2000);
  });
})();
