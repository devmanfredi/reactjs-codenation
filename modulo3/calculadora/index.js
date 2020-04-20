const calculator = require("./calc");
const prompt = require("prompt-sync")();

function options() {
  console.log(`
        1 - add
        2 - subtract
        3 - multiplication
        4 - division
        0 - exit
    `);
}

function optionSelected(option) {
  const n1 = Number(prompt("Enter a number one: "));
  const n2 = Number(prompt("Enter a number two: "));

  switch (option) {
    case "1":
      return calculator.soma(n1, n2);
      break;
    case "2":
      return calculator.subtracao(n1, n2);
      break;
    case "3":
      return calculator.multiplicacao(n1, n2);
      break;
    case "4":
      return calculator.divisao(n1, n2);
      break;
  }
}

options();
let option;
while (option != "0") {
  option = prompt("What's your option?");
  const result = optionSelected(option);

  console.log(`O resultado é ${result}`);
}
