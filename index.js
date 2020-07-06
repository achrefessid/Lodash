const _ = require ('lodash') 

// Traditional way vs Lodash

// Get the name of the first brother of each person

var persons = [
    {
        "name": "Big Boss",
        "brothers": [{"name":"Mouhamed"}, {"name": "Achref"}]
    },
    {
        "name": "Alfonso Manual",
        "brothers": [{"name":"Khalil"}, {"name": "Mahdi"}]
    }
]

// Array's map method.

var names = persons.map(function(item){
    return item.brothers[0].name
})  // [ 'Mouhamed', 'Khalil' ]

// Lodash

var namesBis = _.map(persons, 'brothers[0].name')   //[ 'Mohamed', 'Khalil' ]



