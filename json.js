var jData = 
'[{"Item Name":"The Phylactery of Kel\'Thuzad", "Item Level":"N/A", "Item Type":"Unique", "Description":"Starts a Quest"},' +
'{"Item Name":"Staff Head of Atiesh", "Item Level":"N/A", "Item Type":"Unique", "Description":"Part of the Atiesh legendary quest"},' +
'{"Item Name":"Doomfinger", "Item Level":"92", "Item Type":"Wand", "Description":"146-271 Shadow, Speed 1.50 (139 damage per second), +14 Intellect +14 Critical Strike"},' +
'{"Item Name":"Gressil, Dawn of Ruin", "Item Level":"89", "Item Type":"Sword", "Description":"138-257 Damage, Speed 2.70 (73.1 damage per second), +15 Stamina, +40 Attack Power"},' +
'{"Item Name":"Kingsfall", "Item Level":"89", "Item Type":"Dagger", "Description":"105 - 158 Damage, Speed 1.80 (73.1 damage per second), +16 Agility, +10 Hit, +14 Critical Strike"},' +
'{"Item Name":"Gem of Trapped Innocents", "Item Level":"90", "Item Type":"Neck", "Description":"+13 Intellect, +15 Stamina, +28 Critical Strike"},' +
'{"Item Name":"Hammer of the Twisting Nether", "Item Level":"89", "Item Type":"Mace", "Description":"97-181 Damage, Speed 1.90 (73.2 damage per second), +18 Stamina, +190 Spell Power, +20 Spirit"},' +
'{"Item Name":"Might of Menethil", "Item Level":"89", "Item Type":"Mace", "Description":"109-164 Damage, Speed 3.80 (35.9 damage per second), +12 Strength, +27 Stamina, +16 Critical Strike"},' +
'{"Item Name":"Nerubian Slavemaker", "Item Level":"89", "Item Type":"Crossbow", "Description":"213-396 Damage, Speed 3.20 (95.2 damage per second), +24 Attack Power, +14 Critical Strike"},' +
'{"Item Name":"Shield of Condemnation", "Item Level":"92", "Item Type":"Shield", "Description":"Armor 2594, +27 Intellect, +19 Stamina, +16 Spirit"},' +
'{"Item Name":"Soulseeker", "Item Level":"89", "Item Type":"Staff", "Description":"243-366 Damage, Speed 3.20 (95.2 damage per second) +57 Stamina, +28 Critical Strike, +158 Spell Power, +25 Spell Penetration"},' +
'{"Item Name":"Stormrage\'s Talisman of Seething", "Item Level":"92", "Item Type":"Neck", "Description":"+12 Stamina, +26 Attack Power, +28 Critical Strike"},' +
'{"Item Name":"The Hungering Cold", "Item Level":"89", "Item Type":"Sword", "Description":"76-143 Damage, Speed 1.50 (73 damage per second), 140 Armor, +14 Stamina, Equip: Increased Swords +6"}]';

  
var seperator = ',';
$('#json').html(jData);
$('#btnConvert').click(function() {
  console.log("hello");
ConvertToTable(jData);
});

function createTable() {
var arrJSON = typeof jData != 'object' ? JSON.parse(jData) : jData;
var $table = $('<table/>');
var $headerTr = $('<tr/>');

for (var index in arrJSON[0]) {
  $headerTr.append($('<th/>').html(index));
}
$table.append($headerTr);
for (var i = 0; i < arrJSON.length; i++) {
 var $tableTr = $('<tr/>');
  for (var index in arrJSON[i]) {
    $tableTr.append($('<td/>').html(arrJSON[i][index]));
  }
  $table.append($tableTr);
}
$('body').append($table);

console.log(jData);
}