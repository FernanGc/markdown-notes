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