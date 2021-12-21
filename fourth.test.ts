import {votersByDecade, voters} from "./voters";
import {chunkVotersByAgeGroup,} from "./election";

it("should chunk voters by decade", function () {
    expect(chunkVotersByAgeGroup(voters)).toEqual(votersByDecade);
});