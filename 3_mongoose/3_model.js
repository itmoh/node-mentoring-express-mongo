'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
	role: {
		type: String,
		required: true
	},
	date: {type: Date, default: Date.now},
	members: [{
		type: String
	}]
}, {collection: 'roles'});

/**************INSTANCE METHODS**********************************/
RolesSchema.methods.findAllMembersRoles = function () {
	return this.model('Roles').find({members: this.members});
}

/**************STATIC METHODS**********************************/
RolesSchema.statics.findByName = function (name) {
	return this.find({role: new RegExp(name, 'i')});
}

/**************VIRTUALS**********************************/
RolesSchema.virtual('membersAll')
	.get(function () {
		return this.members.join(',');
	})
	.set(function (members) {
		var membersArray = members.split(',');
		this.members = membersArray;
	});


/**************Validation**********************************/

var userSchema = new Schema({
	phone: {
		type: String,
		validate: {
			validator: function(v) {
				return /d{3}-d{3}-d{4}/.test(v);
			},
			message: '{VALUE} is not a valid phone number!'
		}
	}
});
module.exports = mongoose.model('Roles', RolesSchema);
