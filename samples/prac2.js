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