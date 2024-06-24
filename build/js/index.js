const submit = document.querySelector("#conversion-form");

submit.addEventListener("submit", function (event) {
  event.preventDefault();
  const from = document.querySelector("#convert-from");
  const to = document.querySelector("#convert-to");

  const url = `https://api.coinbase.com/v2/prices/${from.value}-${to.value}/spot`;
  fetch(url)
    .then((response) => response.json())
    .then((jsondata) => {
      const eingabe = document.querySelector("#convert-count");
      const output = document.querySelector("#output");
      const convertedAmount = (jsondata.data.amount * eingabe.value).toFixed(2);
      output.value = convertedAmount;
      console.log(jsondata);
    })
    .catch((error) => {
      console.log(error);
    });
});
