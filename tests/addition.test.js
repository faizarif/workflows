import add from "../index.js";

describe("Test Add Function", () => {
    test.each([
        [1, 2, 5],
        [2, 3, 6]
    ])("Addition Rules", (num1, num2, result) => {
        expect(add(num1, num2)).toBe(result);
    });
});
