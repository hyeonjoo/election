interface Voter {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: "Female" | "Male";
  votedFor: string;
}

export function filterFemaleVoters(voters: Voter[]): Voter[] {
  // Return only female voters
  return voters.filter((voter: Voter) => voter.gender === "Female");
}

interface VoterWithFullName extends Voter {
  fullName: string;
}

export function createVotersWithFullName(voters: Voter[]): VoterWithFullName[] {
  // same as Voter, but should have additional property of fullName, ex. John Doe
  const votersWithFullName: VoterWithFullName[] = voters as VoterWithFullName[];
  votersWithFullName.map((voter) => {
    voter.fullName = voter.firstName + " " + voter.lastName;
  });
  return votersWithFullName;
}

interface ElectionResult {
  votesForA: number;
  votesForB: number;
  totalVotes: number;
  winner: "A" | "B";
}

export function calculateElectionWinner(voters: Voter[]): ElectionResult {
  // calculate election winner
  let electionResult: ElectionResult = {
    votesForA: 0,
    votesForB: 0,
    totalVotes: 0,
    winner: "A",
  };
  for (const voter of voters) {
    if (voter.votedFor === "A") {
      electionResult.votesForA++;
    } else {
      electionResult.votesForB++;
    }
    electionResult.totalVotes++;
  }
  electionResult.winner =
    electionResult.votesForA > electionResult.votesForB ? "A" : "B";
  return electionResult;
}

interface VotersByDecade {
  10: Voter[];
  20: Voter[];
  30: Voter[];
  40: Voter[];
  50: Voter[];
  60: Voter[];
  70: Voter[];
  80: Voter[];
  90: Voter[];
}

export function chunkVotersByAgeGroup(voters: Voter[]): VotersByDecade {
  // chunk voters by age group, in each chunk they should be sorted from youngest to oldest
  const votersByDecade: VotersByDecade = {
    "10": [],
    "20": [],
    "30": [],
    "40": [],
    "50": [],
    "60": [],
    "70": [],
    "80": [],
    "90": [],
  };

  for (const voter of voters) {
    votersByDecade[Math.floor(voter.age / 10) * 10].push(voter);
  }
  for (const id of Object.keys(votersByDecade)) {
    votersByDecade[id].sort((a: Voter, b: Voter) => a.age - b.age);
  }

  return votersByDecade;
}

interface MostVotingAge {
  age: number;
  count: number;
}

export function calculateMostVotingAge(voters: Voter[]): MostVotingAge {
  // The age that voted the most
  let countOfAge = {};
  for (const voter of voters) {
    if (countOfAge[voter.age]) countOfAge[voter.age]++;
    else countOfAge[voter.age] = 1;
  }

  const mostVotingAge = { age: 0, count: 0 };
  for (const [age, count] of Object.entries(countOfAge)) {
    if (mostVotingAge.count < count) {
      mostVotingAge.age = parseInt(age);
      mostVotingAge.count = +count;
    }
  }

  return mostVotingAge;
}
