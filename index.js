const adviceVar = document.querySelector("#advice");
const quoteVar = document.getElementById("quote");
console.log(adviceVar);
console.log(quoteVar);
const diceButton = document.querySelector(".dice-roll-container");
const apiUrl = "https://api.adviceslip.com/advice";

// diceButton,
//   addEventListener("click", async function getAdvice() {
//     const response = await fetch(apiUrl).then();
//     const data = await response.json();
//     console.log(data);
//     const { id, advice } = data["slip"];
//     console.log(data["slip"]["id"]);
//     console.log(data["slip"]["advice"]);
//     console.log("id dextruct = ", id);
//     console.log("advice destruct  = ", advice);
//     // console.log(data);
//     adviceVar.textContent = `advice # ${id}`;
//     quoteVar.textContent = `" ${advice} "`;
//   });

async function getAdvice() {
  const response = await fetch(apiUrl).then();
  const data = await response.json();
  console.log(data);
  const { id, advice } = data["slip"];
  console.log(data["slip"]["id"]);
  console.log(data["slip"]["advice"]);
  console.log("id dextruct = ", id);
  console.log("advice destruct  = ", advice);
  // console.log(data);
  adviceVar.textContent = `advice # ${id}`;
  quoteVar.textContent = `" ${advice} "`;
}
