/******Aggregation Pipeline**************/
//https://docs.mongodb.org/manual/core/aggregation-pipeline/
//https://dzone.com/articles/introduction-mongodb-1
db.unicorns.aggregate([
	{
		$match: {vampires: {$gt: 3}}
	},
	{
		$group: { _id: '$gender', total: { $sum: '$weight' }}
	}
])
/*********Map-Reduce******************/
//https://docs.mongodb.org/manual/core/map-reduce/

var map = function() {
	var key = {name: this.gender, year: this.dob.getFullYear(), month: this.dob.getMonth(), day: this.dob.getDate()};
	emit(key, {count: 1});
};

var reduce = function(key, values) {
	var sum = 0;
	values.forEach(function(value) {
		sum += value['count'];
	});
	return {count: sum};
};

db.unicorns.mapReduce(map, reduce, {out: {inline:1}})

db.unicorns.mapReduce(map, reduce, {out: 'unicorns_stats'});

db.unicorns_stats.find();