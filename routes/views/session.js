var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var params = req.params;
	var username = params.username;

	// query for user with username in url

	keystone.list('users')
	.model
	.findOne()
	.where('username').equals(username)
	.exec(function(err, found){
		// send 401 if false, 200 for ok otherwise
		console.log(found);
		if (!found)
			res.status(401).send();
		else
			res.status(200).send();
	});
};
