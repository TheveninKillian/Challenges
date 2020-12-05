let items = document.querySelectorAll(".wrapper__purchase-item");
const total = document.querySelector(".total-price");

items.forEach((element) => {
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

  btnUp.addEventListener("click", () => {
    inputNum.stepUp();

    let resultNew = newPriceNum * inputNum.value;
    let resultOld = oldPriceNum * inputNum.value;

    newPrice.textContent = resultNew.toFixed(2);
    oldPrice.textContent = resultOld.toFixed(2);
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
    }
  });
});
