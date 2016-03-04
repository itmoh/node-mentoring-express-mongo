/************INSERT DOCUMENT*********/

db.unicorns.insert({
	name: 'Dunx',
	dob: new Date(1976, 6, 18, 18, 18),
	loves: ['grape', 'watermelon'],
	weight: 704,
	gender: 'm',
	vampires: 165
})

/************INSERT DOCUMENTS*********/
db.unicorns.insert([
	{
		name: 'Dunx',
		dob: new Date(1976, 6, 18, 18, 18),
		loves: ['grape', 'watermelon'],
		weight: 704,
		gender: 'm',
		vampires: 165
	}, {
		name: 'Nimue',
		dob: new Date(1999, 11, 20, 16, 15),
		loves: ['grape', 'carrot'],
		weight: 540,
		gender: 'f'
	}])

/************INSERT BULK*********/
var bulk = db.unicorns.initializeUnorderedBulkOp();
bulk.insert({
		item: "ABC1",
		details: {
			model: "14Q3",
			manufacturer: "XYZ Company"
		}
	}
);
bulk.insert({
		item: "ABC2",
		details: {
			model: "14Q3",
			manufacturer: "XYZ Company"
		}
	}
);
bulk.execute();

/************UPDATE DOCUMENT*********/
// update rewrite all document, use $set to update only needed fields
db.unicorns.update(
	{name: 'Dunx'}, // selector
	{
		$set: {
			loves: 'carrot'
		},
		$currentDate: {dob: true}
	}//update
)

/************UPDATE DOCUMENTS*********/
db.unicorns.update(
	{gender: 'm'},
	{
		$set: {loves: "grape"},
		$currentDate: {dob: true}
	},
	{multi: true}
)
// db.unicorns.find({}, {name:1, dob:1, loves: 2, _id:0})

/************UPSERT DOCUMENT***********/
db.unicorns.update( //insert/update
	{name: "my"},
	{
		$set: {
			name: "my",
			loves: "grape"
		},
		$currentDate: {dob: true}
	},
	{upsert: true}
)

/************REMOVE DOCUMENTS***********/
// remove all
db.unicorns.remove({})
// remove match condition
db.unicorns.remove({type: "food"})
// remove match condition only one
db.unicorns.remove({type: "food"}, 1)