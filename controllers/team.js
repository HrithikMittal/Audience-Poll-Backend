const _ = require("underscore");
const Team = require("../modals/team");

const teamCreate = (req, res) => {
  const newTeam = new Team(req.body);
  newTeam
    .save()
    .then(team => {
      res.json({ Team: newTeam });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const ranking = async (req, res) => {
  //   const rank = req.body;
  rank = [{ team1: 2 }, { team2: 1 }, { team3: 3 }];
  await rank.map(async team => {
    await Team.findOne({ name: Object.keys(team)[0] })
      .then(async resultTeam => {
        let r = resultTeam.rank;
        r = (r + Object.values(team)[0]) / 2;
        const newex = { rank: r };
        resultTeam = _.extend(resultTeam, newex);

        await resultTeam
          .save()
          .then(() => {
            return res.end("Done");
          })
          .catch(err => {
            console.log("Error is ", err.message);
          });
      })
      .catch(err => {
        console.log("Error message is ", err.message);
      });
  });
};

module.exports = { ranking, teamCreate };
