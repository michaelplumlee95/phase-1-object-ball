function gameObject() {
  let gameObject = {
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 7,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "Desagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },

    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
  };
  return gameObject;
}

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

function numPointsScored(playerName) {
  let object = gameObject();
  for (let team in object) {
    for (let player in object[team].players) {
      if (player === playerName) {
        return object[team].players[player].points;
      }
    }
  }
}

function shoeSize(playerName) {
  let object = gameObject();
  for (let team in object) {
    for (let player in object[team].players) {
      if (player === playerName) {
        return object[team].players[player].shoe;
      }
    }
  }
}

function teamColors(getTeamName) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].teamName === getTeamName) {
      return object[team].colors;
    }
  }
}

function teamNames() {
  let object = gameObject();
  let teamNames = [];
  for (const team in object) {
    teamNames.push(object[team]["teamName"]);
  }
  return teamNames;
}

function playerNumbers(getTeamName) {
  let object = gameObject();
  let playerNumbers = [];
  for (let team in object) {
    if (object[team].teamName === getTeamName) {
      let players = object[team].players;
      for (const player in players) {
        playerNumbers.push(players[player].number);
      }
    }
  }
  return playerNumbers;
}

function playerStats(playerName) {
  let object = gameObject();
  for (let team in object) {
    let players = object[team].players;
    for (let player in players) {
      if (player === playerName) {
        return object[team].players[player];
      }
    }
  }
}

function bigShoeRebounds() {
  let object = gameObject();
  let playerShoeSizes = {};
  for (let team in object) {
    let players = object[team].players;
    for (let player in players) {
      playerShoeSizes[player] = shoeSize(player);
    }
  }
  let maxKey = null;
  let maxValue = -Infinity;

  for (const player in playerShoeSizes) {
    if (playerShoeSizes[player] > maxValue) {
      maxKey = player;
      maxValue = playerShoeSizes[player];
    }
  }

  function rebounds(playerName) {
    let object = gameObject();
    for (let team in object) {
      for (let player in object[team].players) {
        if (player === playerName) {
          return object[team].players[player].rebounds;
        }
      }
    }
  }
  return rebounds(maxKey);
}

console.log(bigShoeRebounds());
