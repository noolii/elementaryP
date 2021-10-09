var orbitalPeriods = function(p) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447; 
    return Math.round(2*Math.PI*((p+earthRadius)**3/GM)**(1/2)); 
 }

function orbitalPeriod(arr) {

return arr.map(({name , avgAlt}) => { return {name,  "orbitalPeriod" : orbitalPeriods(avgAlt) }; } );
}


console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
console.log(orbitalPeriods(556.7))