var friendData = require("../data/friends-data.js");

//routing 

module.exports = function(app){
	
	app.get("/app/friends", function(req, res){
		// console.log()
		res.json(friendData);

	});

//here I am trying to loop through the scores 
	app.post("/api/friends", function(req, res){

			var newFriend = req.body;

		for(var i = 0;i < newFriend.scores.length; i++) {
			if(newFriend.score[i]== "1( Strongly Disagree)"){
				newFriend.scores[i] = 1;
			}else if(newFriend.scores[i]=="5(Strongly Agree)"){
				newFriend.scores[i] = 5;
			}else{
				newFriend.scores[i] = parseInt(newFriend.scores[i])
			}
		}

//here i will compare the scores to make a match
 var differencesArray = [];

 for(var i =0; i<friendData.length; i++){

 	var comparedFriend = friendData[i];
 	var totalDifference = 0; 

 	for(var k = 0; k < comparedFriend.scores.length; k++){
 		var differencesOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
 		totalDifference += differencesOneScore;
 	}

 	differencesArray[i] = totalDifference;
 }

 var myFriendNum = differencesArray[0];
 var myFriendIndex = 0;

 for(var i = 1; i< differencesArray.length; i++){
 	if(differencesArray[i] < myFriendNum) {
 		myFriendNum = differencesArray[i];
 		myFriendIndex = 1;
 	}
 }

 friendData.push(newFriend);
 res.json(friendData[myFriendIndex]);


	// 	if(friendData < 10){
	// 		friendData.push(req.body);
	// 		res.json(true);
	// 	}else{
	// 		console.log("does not read")
	// 	}

	// });

	// app.post("/api/clear", function(){
	// 	friendData = [];

	// 	console.log(friendData);
	});
};








