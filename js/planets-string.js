(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    console.log(planetsString);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    planetsString = planetsArray.join(' <br> ');
    console.log(planetsString);
    var newPlanets = 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune';
    var newPlanetsArray = newPlanets.split(',');
    console.log(newPlanetsArray);
 
    var ulTag = document.createElement('div');
    var liTag = document.createElement('ul');
    var node = document.createTextNode(newPlanets);
    var newChild = ulTag.appendChild(liTag);
    var secondChild = newChild.appendChild(node);


    console.log(liTag);


})();