db.unicorns.find({gender: 'm', weight: {$gt: 700}})

db.unicorns.find({gender: {$ne: 'f'}, weight: {$gte: 701}})

//$lt
//$lte
//$gt
//$gte
//$ne
//$or

db.unicorns.find({gender: 'f', $or: [{loves: 'apple'}, {loves: 'orange'}, {weight: {$lt: 500}}]})

/******Projection***/
db.unicorns.find({vampires: {$exists: false}}, { name:1, _id: 0})

//.skip(2)
//.limit(5)
//.sort({name:1})

