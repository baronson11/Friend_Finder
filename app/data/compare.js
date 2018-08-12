const friends = require("./friends.js");

function compareFriends(matchFriend) {

  // loops through each friend in array
    for (i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      let totalDifference = 0;

  // loops through each score and compares it
      for (x = 0; x < currentFriend.scores.length; x++) {
        let result1 = parseInt(currentFriend.scores[x]);
        let result2 = parseInt(matchFriend.scores[x]);

  // checks which result is greater and subtracts it by the lower amnt
  // adds the difference to totalDifference
        let difference = Math.abs(result2 - result1);
        totalDifference += difference;
      }

  // pushes the totalDiffence into current iteration of friend
    currentFriend.totalDifference = totalDifference;
  }

// goes back through each friend, assigns totalDiff, shows results in node
let results = [];

  friends.forEach((friend) => {
    if (friend.totalDifference > 0) {
      results.push(
        {
          friend_name: friend.name,
          total_Difference: friend.totalDifference,
        }
      );
      console.log(`${friend.name} | ${friend.totalDifference}`);
    }
  });

  return results;
}

module.exports = compareFriends;
