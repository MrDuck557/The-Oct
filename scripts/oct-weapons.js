//Seq for all unit weapons
allWeapons = new Seq();

//Read and store all unit weapons
Vars.content.units().each(e => {
  allWeapons.addAll(e.weapons);
});

//Write all weapons to Oct
UnitTypes.oct.weapons = allWeapons

//Have fun!