describe("Calculator", () => {
  describe("#add", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.add("1", 2)).toThrow();
        expect(() => calculator.add(1, "2")).toThrow();
      });
    });

    describe("when passed two numbers", () => {
      it("should not throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it("should add the numbers together", () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });

  describe("#subtract", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract("2", 1)).toThrow();
        expect(() => calculator.subtract(2, "1")).toThrow();
      });
    });

    describe("when passed two numbers", () => {
      it("should not throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract(2, 1)).not.toThrow();
      });

      it("should subtract the two numbers", () => {
        const calculator = new Calculator();

        const result = calculator.subtract(2, 1);

        expect(result).toBe(1);
      });
    });
  });

  describe("#multiple", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply("2", 1)).toThrow();
        expect(() => calculator.multiply(2, "1")).toThrow();
      });
    });

    describe("when passed two numbers", () => {
      it("should multiple the two numbers", () => {
        const calculator = new Calculator();

        const result = calculator.multiply(2, 1);

        expect(result).toBe(2);
      });

      it("should not throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply(2, 1)).not.toThrow();
      });
    });
  });

  describe("#divide", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.divide("2", 1)).toThrow();
        expect(() => calculator.divide(2, "1")).toThrow();
      });
    });

      describe("when passed two numbers", () => {
        it("should not throw an error", () => {
          const calculator = new Calculator();

          expect(() => calculator.divide(2, 1)).not.toThrow();
        });

        it("should divide the two numbers", () => {
          const calculator = new Calculator();

          const result = calculator.divide(2, 1);

          expect(result).toBe(2);
      });
    });
  });
});
