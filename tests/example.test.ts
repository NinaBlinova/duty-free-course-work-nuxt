import { add } from "../Model/model";

describe("Math functions", () => {
    test("should add two numbers correctly", () => {
        expect(add(1, 2)).toEqual(3);
    });
});
