/* R-1.10 Write a Java class, Flower, that has three instance variables of type String, int,
and ﬂoat, which respectively represent the name of the ﬂower, its number of
petals, and price. Your class must include a constructor method that initializes
each variable to an appropriate value, and your class should include methods for
setting the value of each type, and getting the value of each type. */

class Flower {

    constructor(flower, petals, price) {
        this.flower = flower;
        this.petals = petals;
        this.price = price;
    }
     
    setName(fName) { this.flower = fName; } 
    setPetals(fPetals) { this.petals = fPetals; } 
    setPrice(fPrice) { this.price = fPrice; } 

    getName() { return flower; }
    getPetals() { return petals; }
    getPrice() { return price; }

    printInfo() {
        console.log("Name: " + this.flower );
        console.log("No of Petals: " + this.petals);
        console.log("Price: " + this.price);
    }

} // End class

const f = new Flower('Rose', 3, 14.4);
f.printInfo();
f.setPetals(5);
f.printInfo();