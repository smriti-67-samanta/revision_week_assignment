//Multi-Level Data Challenge
//---------------------------------
//Tasks
//Filter 1: Get cities where pollution > 150.

//Filter 2: From the result, again filter those where population >= 15.

//Sort: Sort the final filtered cities alphabetically by name.

//Reduce: Find the total pollution of all filtered cities.

//Extra Task:

//Show top 3 most polluted cities (after sorting by pollution descending).
//Group the remaining filtered cities by their region (use reduce()).

//ANS=>


    const cities = [
  { city: "Delhi", pollution: 280, population: 32, region: "North" },
  { city: "Mumbai", pollution: 190, population: 25, region: "West" },
  { city: "Kolkata", pollution: 210, population: 18, region: "East" },
  { city: "Chennai", pollution: 130, population: 13, region: "South" },
  { city: "Bangalore", pollution: 120, population: 14, region: "South" },
  { city: "Hyderabad", pollution: 155, population: 16, region: "South" },
  { city: "Ahmedabad", pollution: 175, population: 20, region: "West" },
  { city: "Pune", pollution: 140, population: 10, region: "West" },
  { city: "Jaipur", pollution: 160, population: 9, region: "North" },
  { city: "Lucknow", pollution: 220, population: 19, region: "North" },
  { city: "Chandigarh", pollution: 145, population: 6, region: "North" },
  { city: "Patna", pollution: 240, population: 12, region: "East" },
  { city: "Bhopal", pollution: 170, population: 15, region: "Central" },
  { city: "Indore", pollution: 150, population: 14, region: "Central" },
  { city: "Nagpur", pollution: 160, population: 8, region: "Central" },
  { city: "Surat", pollution: 180, population: 11, region: "West" },
  { city: "Varanasi", pollution: 230, population: 17, region: "North" },
  { city: "Visakhapatnam", pollution: 125, population: 9, region: "South" },
  { city: "Raipur", pollution: 200, population: 13, region: "Central" },
  { city: "Guwahati", pollution: 110, population: 7, region: "East" }
];


const higherPollution=cities.filter(city=>city.pollution > 150)
console.log(higherPollution)

console.log("-------------------------------------------------------------------------")


const higherPopulation=higherPollution.filter(city=>city.population >= 15)
console.log(higherPopulation)

console.log("-------------------------------------------------------------------------")

const sorted=higherPopulation.sort((a,b)=>  a.city.localeCompare(b.city))
console.log(sorted)

console.log("-------------------------------------------------------------------------")


const totalPollution=higherPopulation.reduce((acc,curr)=> acc+curr.pollution,0)
console.log(totalPollution)