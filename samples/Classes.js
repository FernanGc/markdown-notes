class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
} // End class Element

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
} // End class Park

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = 3;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(parks) {
    console.log('-----PARKS REPORT-----');
    // Calcular la desidad
    parks.forEach(element => element.treeDensity());

    // Average age
    const ages = parks.map(element => new Date().getFullYear() - element.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${parks.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const oldPark = parks
        .map((element => element.numTrees))
        .findIndex(element => element >= 1000);
    console.log(`${parks[oldPark].name} has more than 1000 trees.`);
}

function reportStreets(streets) {
    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(streets.map(element => element.length));
    console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // CLassify sizes
    streets.forEach(element => element.classifyStreet());
}


reportParks(allParks);
reportStreets(allStreets);