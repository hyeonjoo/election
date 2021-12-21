import {createVotersWithFullName} from "./election";
import { voters, votersWithFullName } from "./voters";

it("should produce voters with full names", function () {
  expect(createVotersWithFullName(voters)).toEqual(votersWithFullName);
});