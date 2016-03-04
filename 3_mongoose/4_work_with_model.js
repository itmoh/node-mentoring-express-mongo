var model = require('./3_model');


var newModel = new model({
	role: 'dev',
	members: ['user1', 'user3']
});

//newModel.save(function (err) {
//	if (err) return handleError(err);
//	// saved!
//})
newModel.save()
	.then()
	.catch()



/**************Find**********************************/
model.find({role: 'dev'})
	.skip(skip)
	.limit(limit)
	.then()
	.catch()

//model.findById

/**************Remove**********************************/
model.remove({role: 'dev'})
	.then()
	.catch()

/**************Update**********************************/
model.update({
		role: 'dev'
	}, {
		$set: {members: ['user2']}
	})
	.then()
	.catch()

model.findById(id)
	.then(function (modelInstance) {
		var updatedInstance = _.extend(modelInstance, req.body);
		return updatedInstance.save();
	})
	.then()
	.catch()

/**************INSTANCE METHODS**********************************/
var newModel = new model({
	role: 'dev',
	members: ['user1', 'user3']
});
newModel.findAllMembersRoles()
	.then()
	.catch()

/**************STATIC METHODS**********************************/

model.findByName('^d.*')
	.then()
	.catch()

/**************VIRTUALS**********************************/

var newModel = new model({
	role: 'dev',
	members: ['user1', 'user3']
});
console.log(newModel.membersAll);
newModel.membersAll = 'test1,test2,test3';
console.log(newModel.members);