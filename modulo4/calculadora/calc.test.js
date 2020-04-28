const calc = require("./calc");

describe("calculadora", () => {
  it("teste exemplo", () => {
    const num1 = 23;
    const num2 = 7;

    expect(23 + 7).toBe(30);
    expect(23 + 7).not.toBe(31);
  });

  describe("soma", () => {
    it("retorna 3 quando 2 + 1", () => {
      const num1 = 2;
      const num2 = 1;

      expect(calc.soma(num1, num2)).toBe(3);
    });
  });

  describe("subtração", () => {
    it("retorna 1 quando 2 - 1", () => {
      const num1 = 2;
      const num2 = 1;

      expect(calc.subtracao(num1, num2)).toBe(1);
    });
  });

  describe("multiplicação", () => {
    it("retorna 6 quando 2 * 3", () => {
      const num1 = 2;
      const num2 = 3;

      expect(calc.multiplicacao(num1, num2)).toBe(6);
    });
  });

  describe("divisão", () => {
    it("retorna 2 quando 6 / 3", () => {
      const num1 = 6;
      const num2 = 3;

      expect(calc.divisao(num1, num2)).toBe(2);
    });

    it("retorna 0 quando divisão 0.", () => {
      const num1 = 6;
      const num2 = 0;

      expect(calc.divisao(num1, num2)).toBe("Não pode fazer divisão por 0!");
    });
  });
});
