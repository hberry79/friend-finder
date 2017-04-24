var friendData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api', function(req, res) {
        res.json(friendData);
    });

    app.post('/newUser', function(req, res) {
        var newUser = req.body;
        friendData.push(newUser);
    });
}
