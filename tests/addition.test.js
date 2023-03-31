import add from "../index.js";

describe("Test Add Function", () => {
    test.each([
        [1, 2, 3],
        [2, 3, 5]
    ])("Addition Rules", (num1, num2, result) => {
        expect(add(num1, num2)).toBe(result);
    });
});