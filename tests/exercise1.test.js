const lib = require("../exercise1");
describe("FizzBuzz", () => {
  it("should throw an error if input is not a number", () => {
    expect(() => {
      lib.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
  });
  it("should return FizzBuz if input is divisible by 5 and 3", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("should return Fizz if input is divisible by 3", () => {
    const result = lib.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });
  it("should return Buzz if input is divisible by 5", () => {
    const result = lib.fizzBuzz(25);
    expect(result).toBe("Buzz");
  });
  it("should return input if input is not divisible by 3 or 5", () => {
    const result = lib.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
