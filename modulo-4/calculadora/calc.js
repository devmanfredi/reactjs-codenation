function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function multi(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  if (num2 == 0) {
    return "Não pode fazer divisão por 0!";
  }
  return num1 / num2;
}

module.exports = {
  soma: add,
  subtracao: sub,
  multiplicacao: multi,
  divisao: div,
};
