const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* forEach */
    // companies.forEach( (company) => console.log(company.name));

/* filter */

// Filter all the ages greater thatn 21 in the ages array
const canDrink = ages.filter(age => age >= 21);

// Filter all the 'Retail' companies in the comanies array.
const retailCompanies = companies.filter(c => c.category === 'Retail');

// Filter the companies that start in the 80's
const companies80 = companies.filter(c => (c.start >= 1980 && c.start < 1990));

// Filter all the companies that lasted 10 yars
const lastedCompanies = companies.filter(c => (c.end - c.start >= 10));


/* map */

// Regresa un arreglo con los resultados 
const agesSqrt = ages.map(a => Math.round(Math.sqrt(a)));
const agesTimesTwo = ages.map(a => a * 2);

const testMap = companies.map(c => {
    return `${c.name} [${c.start} - ${c.end}]`;
});

/* Sort */
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
const sortAges = ages.sort((a, b) => a - b);

/* Reduce */

const sumAges = ages.reduce((total, age) => total + age, 0);
const totalYear = companies.reduce((total, company) => total + (company.end - company.start), 0);


/* All together */
const example = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
