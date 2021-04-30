//Seq for all unit weapons
var allWeapons = new Seq();

//Read and store all unit weapons except crawler because self-destruct
Vars.content.units().each(e => {
  if (e != UnitTypes.crawler){
    allWeapons.addAll(e.weapons);
  }
});

//Do stuff to oct
UnitTypes.oct.weapons = allWeapons;
UnitTypes.oct.rotateShooting = true;
UnitTypes.oct.immunities = ObjectSet.with(StatusEffects.slow, StatusEffects.unmoving);
UnitTypes.oct.defaultController = () => new FlyingAI();
UnitTypes.oct.health = 130000;
//UnitTypes.oct.abilities.get(0).regen = 20;
//UnitTypes.oct.abilities.get(0).max = 35000;
//UnitTypes.oct.abilities.get(1).amount = 1300;

//Have fun!