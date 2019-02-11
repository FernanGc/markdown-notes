# JavaScript Notes

__Precedencia de Operadores__

La precedencia de operadores determina el orde en el cual los operadores son evaluados.

1. _Los operadores con mayor precedencia son evaluados primero._

__Asociatividad__

 La asociatividad determina el orden en el cual los operadores con el mismo nivel de la precedencia son procesados.

 ## Boolean Logic

* AND ( && ) => `true` if **ALL** are `true` 
* OR ( || ) => `true` if **ONE** is `true` 
* NOT ( ! ) => inverts `true`/`false` value

---

AND         | TRUE  | FALSE
-------     |------ |-------
**TRUE**    | TRUE  | FALSE
**FALSE**   | FALSE | FALSE

---

OR          | TRUE  | FALSE
-------     |------ |-------
**TRUE**    | TRUE  | TRUE
**FALSE**   | TRUE | FALSE


## Funtion Expressions and Functions declarations
```javascript

// This is a function declaration
function myFunction() { /* ..... */ }

// This is a function expression
var myFunction = function () { /* ...... */}
```

```javascript
var age = 16;

age >= 20;          // => false
age < 30;           // => true
!(age < 30);        // => false

age >= 20 && age < 30;  // => false
age >= 20 || age < 30   // => true
```

## Arrays

Declaracion
```javascript

var array = ['a', 'b', 'c', 123];
var array = new Array(1, 2, 3, 4);

console.log(array);
console.log(array[2]);
console.log(array.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
```

Methods
```javascript
array.push('a');        // Agrega un elemento al final
array.unshift('b');     // Agrega un elemeno al inicio
array.pop();            // Quita un elemento del final
array.shift();          // Quita un elemeto del inicio
array.indexOf(123);     // Regresa la posicion del argumento
```

## Objects and Properties

**Object literal**

```Javascript
var object = {
    a: 'b',
    c: 'd',
    e: 123,
    f: ['a', 'b', 'c'],
    g: 1.4,
    h: true
}

// Accesamos al Objeto usando 'dot notation'
console.log(object.a);
console.log(object['c']);

// Modificar
object.e = 23;
object['h'] = false;
object.f[0]='AA'
```

**Object literal**

```Javascript
const object = new Object();

object.a = 'b';
object.b = 123;
object['c'] = 'd';
```

## Objects and Methods

```Javascript
const fer = {
    firstName: 'Don Verga',
    lastName: 'Chingon',
    birthYear: 1990,
    calAge: function() {
        this.age = 2018 - this.birthYear;
    }
}

fer.calAge();
console.log(fer);john.calBMI();
```

## Example

```Javascript
var mark = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calBMI: function() {
        this.bmi = this.mass / Math.pow(this.height, 2);
        return this.bmi
    }
}

var john = {
    fullName: 'John Miller',
    mass: 92,
    height: 1.95,
    calBMI: function() {
        this.bmi = this.mass / Math.pow(this.height, 2);
        return this.bmi
    }
}

if(mark.calBMI() > john.calBMI()) {
    console.log(`${mark.fullName} has a higher BMI of ${mark.bmi}`);
} else if (mark.bmi < john.bmi){
    console.log(`${john.fullName} has a higher BMI of ${john.bmi}`);
} else {
    console.log('Mark and John have the same BMI');
}
```

## Function constructor

```javascript
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new  Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1946, 'retires');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
```


## CallBacks

```javascript

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, func) {
    var results = [];
    for (let i = 0; i < array.length; i++) {
        results.push(func(array[i]));        
    }

    return results;
}

function calculateAge(year) {
    return 2018 - year;
}

function isFullAge(age) {
    return age >= 18;
}

function maxHeartRate(age) {
    if (age <= 18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
```

## Functions returning Functions

```javascript
// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX desing is ?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

// La funcion regresa una funcion anonima,
// en este caso la variable teacherQuestion
// es igual a  function teacherQuestion(name) { ... }
var teacherQuestion = interviewQuestion('teacher');

// Portando a teacherQuestion le podemos asignar
// un parametro y regresar un valor.
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');


interviewQuestion('teacher')('fer');
```

## Clusures

_An inner function has always acces to the variables
and parameters of its outer function, even after the 
outer function has returnd_.


```javascript

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX desing is ?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
```

