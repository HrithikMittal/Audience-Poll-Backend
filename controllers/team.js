const _ = require("underscore");
const Team = require("../modals/team");

const ranking = (req, res) => {
  const rank = req.body;
  rank = [{ team1: 2 }, { team2: 1 }, { team3: 3 }];
  rank.map(team => {
    Team.find({ name: team.name })
      .then(res => {
        let r = res.rank;
        r = (r + team.rank) / 2;
        const newex = { rank: r };
        team = _.extend(newex);
        team
          .save()
          .then(() => {
            res.json("Done");
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

module.exports = { ranking };
