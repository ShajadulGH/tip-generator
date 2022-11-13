const amount = document.querySelector("#amount");
const guest = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const result = document.querySelector("#tip-amount");
calculate = () => {
  let tip = ((amount.value * quality.value) / guest.value).toFixed();
  console.log(tip);
  amount.value = "";
  guest.value = "";
  quality.value = "";
  if (tip === NaN) {
    result.textContent = "Tip ৳0 Each";
    showTipAmount();
  } else {
    result.textContent = `Tip ৳${tip} Each`;
    showTipAmount();
  }
};
const showTipAmount = () => {
  result.className = "show";
  setTimeout(() => {
    result.className = result.className.replace("show", "");
  }, 3000);
};
