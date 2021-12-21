import { calculateMostVotingAge } from "./election";
import { voters } from "./voters";

it("should compute most common voting age", function () {
    expect(calculateMostVotingAge(voters)).toEqual({ age: 60, count: 7 });
});