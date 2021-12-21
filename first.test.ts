import {femaleVoters, voters} from "./voters";
import {filterFemaleVoters} from "./election";

it("should filter female voters", function () {
    expect(filterFemaleVoters(voters)).toEqual(femaleVoters);
});