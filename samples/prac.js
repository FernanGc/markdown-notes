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
    12: "Namath",
    16: "Montana",
    18: "Unitas"
};


/* Accessing objects with dot notation */
let dotVal_1 = testObj.hat;             // Object.property
let dotVal_2 = testObj.shirt;           // Object.property

/* Accessing objects with bracket notation */
let bracketVal_1 = testObj["shoes"];    // Object["property"]
let bracketVal_2 = testObj['hat'];      // Object['property']

/* Accessing Object Properties with Variables */
let property = 16;
let name = names[property];

/* Update Object Properties */
console.log('Before ' + ourDog.name);
ourDog.name = 'Richi';
console.log('After ' + ourDog.name);


/* Add New Properties to an Object */
names[01] = 'Fercho';
console.log(names[01]);


/* Delete New Properties to an Object */
delete testObj.del;
console.log(testObj.del);

/* Objects for Lookups */
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

/* Testing Objects for Properties */
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

/* Manipulatng Complex Objects */
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

/* Accessing Nested Arrays */
var format1 = myMusic[0].formats[1];
console.log(format1);

var format2 = myMusic[1].formats[0];
console.log(format2);

/* Accessing Nested Objects */
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

