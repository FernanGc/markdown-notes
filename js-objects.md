# JavaScript Objects Notes

## Objects
```Javascript
/* Object 2 */
const ourDog = {
    // Property - Value
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

/* Object 2 */
const testObj = {
    // Property - Value
    "hat": "bellcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "del": "me"
};

/* Object 3 */
const names = {
    // Property - Value
    12: "Namath",
    16: "Montana",
    18: "Unitas"
};
```
## Accessing objects with dot notation
```Javascript
let dotVal_1 = testObj.hat;             // Object.property
let dotVal_2 = testObj.shirt;           // Object.property
```

## Accessing objects with bracket notation
```Javascript
let bracketVal_1 = testObj["shoes"];    // Object["property"]
let bracketVal_2 = testObj['hat'];      // Object['property']
```

## Accessing Object Properties with Variables
```Javascript
let property = 16;
let name = names[property];
```

##  Add New Properties to an Object
```Javascript
names[01] = 'Fercho';
console.log(names[01]);
```

##  Delete New Properties to an Object
```Javascript
delete testObj.del;
console.log(testObj.del);
```

##  Update Object Properties
```Javascript
console.log('Before ' + ourDog.name);
ourDog.name = 'Richi';
console.log('After ' + ourDog.name);
```

## Objects for Lookups
```Javascript
function phoneticLookUp(value) {
    let result = "";

    let lookup = {
        "a": "aaaa",
        "b": "bbbb",
        "c": "cccc",
        "d": "dddd",
        "e": "eeee",
        "f": "ffff"
    };

    result = lookup[value];

    return result;
}

let search = phoneticLookUp('b');
console.log(search);
```
## Testing Objects for Properties
```Javascript
var animals = {
    gift: "Pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(property) {
    if(animals.hasOwnProperty(property)) {
        return animals[property];
    } else {
        return 'Not found';
    }
}

console.log(checkObj('pet'));
```


## Manipulatng Complex Objects
```Javascript
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 19973,
        "formats": [
            "CD",
            "B1",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Ceral Man",
        "release_year": 2003,
        "formats": [
            "YouTube video",
            "MP3"
        ]
    }
];
```
## Accessing Nested Arrays
```Javascript
var  format1 = myMusic[0].formats[1];
console.log(format1);

var format2 = myMusic[1].formats[0];
console.log(format2);
```
## Accessing Nested Objects
```Javascript
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunck": "jack"
        }
    }
};

var boxContent = myStorage.car.inside["glove box"];
console.log(boxContent);
```
# Example
```Javascript
const collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it Rock", "You Give Love Bad Name"]
    },
    "2468": {
        "album": "1999",
        "artist": "Price",
        "tracks": ["1999", "Little Red Corvette"]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

//  This line makes a copy of the collection for tests
let collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);
console.log("--------------------");
// A function to update records of the object.
function updateRecords(id, prop, value) {
    if (value === '') {
        // Si no se revice un valor, eliminamos la propiedad
        delete collection[id][prop];
    } else if (prop === 'tracks') {
        // Si la propiedad no existe la creamos o la inicializamos
        collection[id][prop] = collection[id][prop] || [];
        // Ingresamos le valor al final del array
        collection[id][prop].push(value);
    } else {
        // Asignamos le valor a la propiedad.
        collection[id][prop] = value
    }
    return collection;
}

updateRecords(5439, "tracks", "new");
updateRecords(1245, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));
```

 # Example 
 ```Javascript
 const contacts = [
    {
        "firstName" : "Akira",
        "lastName" : "Laine",
        "number" : "1234321",
        "likes" : ["a","b", "c", "d"]
    }, 
    {
        "firstName" : "Harry",
        "lastName" : "Potter",
        "number" : "1234321",
        "likes" : ["Hogwarts","Magic", "c", "d"]
    },
    {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "1234321",
        "likes" : ["Violin","Intriguing Cases", "c", "d"]
    },
    {
        "firstName" : "Kristian",
        "lastName" : "Vos",
        "number" : "unknown",
        "likes" : ["JavaScript","Gaming", "Foxes"]
    },
];

function lookProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        console.log(i);
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }

    return "No such contacts";
}


let data = lookProfile('Kristian', 'lastName');
console.log(data);
 ```