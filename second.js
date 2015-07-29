var SolarSystem = function(arg1) {
	var closestStars = ["Proxima Centauri", "Alpha Centauri A", "Alpha Centauri B", "Barnard's Star", "Wolf 359"];
	var age = 5000000000;
	var dwarfPlanets = ["Pluto", "Eris", "Ceres"];

	arg1.getStars = function() {
		return closestStars;
	};
	arg1.getAge = function() {
		return age;
	};
	arg1.setAge = function(newAge) {
		age = newAge;
	};
	arg1.getDwarfPlanets = function() {
		return dwarfPlanets;
	};
	arg1.setDwarfPlanets = function(newDwarf) {
		dwarfPlanets.push(newDwarf);
	};
	return arg1;
}(SolarSystem);