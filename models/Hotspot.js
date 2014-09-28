var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Hotspot = new keystone.List('hotspots');

Hotspot.add({
	uid: {type: String, required:true, initial: true, index: true, unique: true},
	name: {type: String, required: true, initial: true}
});

Hotspot.schema.add({
	members: [{
		name: {type:String},
		timeVerified: {type: Date, default: Date.now}
	}]
});
/**
 * Registration
 */

Hotspot.defaultColumns = 'uid, name';
Hotspot.register();