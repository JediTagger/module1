var SolarSystem = function() {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var landedOn = 4;
  var currentSpacecraft = ["New Horizons", "Spirit", "Opportunity"];
  var stars = 1;

  return {
    getPlanets: function() {
      return planets;
    },
    getLandedOn: function() {
      return landedOn;
    },
    setLandedOn: function(newLanded) {
      if (newLanded < 5) {
        throw "Can't explore fewer planets than we've already explored."
      }
      if (newLanded > 8) {
        throw "Can't explore more planets than there are."
      }
      landedOn = newLanded;
    },
    lastModified: new Date(),
    getCurrentSpacecraft: function() {
      return currentSpacecraft;
    },
    setCurrentSpacecraft: function(newCurrentSpacecraft) {
      currentSpacecraft.push(newCurrentSpacecraft);
    },
    setStars: function(num) {
      if (num !== 1) {
        throw "You can only set the number of stars to 1."
      }
    }
  }
}();
