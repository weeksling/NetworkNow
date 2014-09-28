var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var params = req.params;
	var uid = params.uid,
		username = params.username;

	keystone.list('hotspots')
	.model
	.findOne()
	.where('uid').equals(uid)
	.exec(function(err, found){
		if (!found){
			res.status(403).send();
		} else {
			console.log({name:username} in found.members);
			var exists = false;
			for (i in found.members){
				if (found.members[i].name == username)
					exists = true;
			}

			if (!exists){
				found.members.push({name:username});
				found.save();
				res.status(200).send();
			} else {
				res.status(403).send();
			}
			console.log(found);
		}
	});
};