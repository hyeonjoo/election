import { calculateElectionWinner } from "./election";
import { voters } from "./voters";

it("should compute election winner", function () {
  expect(calculateElectionWinner(voters)).toEqual({
    votesForA: 44,
    votesForB: 58,
    totalVotes: 102,
    winner: "B",
  });
});