import add from "../index.js";

describe("Test Add Function", () => {
    test.each([
        [2, 2, 4],
        [2, 3, 5]
    ])("Addition Rules", (num1, num2, result) => {
        expect(add(num1, num2)).toBe(result);
    });
});
