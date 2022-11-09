let element = document.querySelector("#tid  ");
console.log(element.textContent);

fetch("	https://open.er-api.com/v6/latest/USD", {
  headers: {
    // Request JSON
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    this.lastUpdate = result.time_last_update_utc;

    // console.log(lastUpdate);
    // console.log(this.nextUpdate);
    element.textContent = lastUpdate;
    // console.log(element.textContent);
  });

let elementtva = document.querySelector("#firstMablagh");
// console.log(elementtva.value);
let firstseksiffran = document.querySelector("#maininformationp");

elementtva.addEventListener("input", () => {
  firstseksiffran.textContent = elementtva.value;
});
// console.log(firstseksiffran.textContent);
firstseksiffran.textContent = elementtva.value;
// console.log(firstseksiffran.textContent);

let z = 3120;

let sistamablagh = document.querySelector("#sistamablagh");
let x = elementtva.value * z;
let y = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
sistamablagh.textContent = y;

elementtva.addEventListener("input", () => {
  let x = elementtva.value * z;

  let y = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  sistamablagh.textContent = y;
});

// console.log(elementtva.value * z);
