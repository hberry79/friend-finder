var friendData = require('../data/friends.js');
var path = require('path');

module.exports = function (app){
	app.get('/api', function(req, res){
		res.json(friendData);
	})
}