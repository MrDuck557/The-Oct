//Seq for all unit weapons
var allWeapons = new Seq();

//Read and store all unit weapons
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
//Have fun!