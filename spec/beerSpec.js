describe("Buy Beer", () => {
  describe("when passed an age of 18 or higher", () => {
    it("should return true", () => {
      expect(canBuyBeer(18)).toBe(true);
    });
  });

  describe("when passed an age 17 or lower", () => {
    it("should return false", () => {
      expect(canBuyBeer(17)).toBe(false);
    });
  });

  describe("when Greg's age is 18 or over", () => {
    it("should return Greg is over 18", () => {
        const originalAge = greg.age;
        greg.age = 18
        
        const result = canGregBuyBeer();
    
        expect(result).toBe('Greg is 18, he can buy beer!');
        greg.age = originalAge;
    });
  });

  describe("when Greg's age is lower than 18", () => {
    it("should return Greg is under 18", () => {
        const originalAge = greg.age;
        greg.age = 15

        const result = canGregBuyBeer();

        expect(result).toBe("Greg is 15, he can't buy beer :(");
        greg.age = originalAge;
    });
  });
});
