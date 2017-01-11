var friendData = require("../data/friends-data.js");

//routing 

module.exports = function(app){
	app.get("/app/friends", function(req, res){
		console.log()

	});


	app.post("/api/friends", function(req, res){

		if(friendData < 10){
			friendData.push(req.body);
			res.json(true);
		}else{
			console.log("does not read")
		}

	});

	app.post("/api/clear", function(){
		friendData = [];

		console.log(friendData);
	});
};