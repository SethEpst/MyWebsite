
var armor;
var health;
var enemyLvl;
var damageReduction
var value;
var y = new Array();
var x = new Array();
var text = "";


function calculate(){ 
    var demo = document.getElementById("demo");
    enemyLvl = document.getElementById("enemyLvl").value;
    armor = 0
    var round;
    text = '';

    if(enemyLvl > 83) {
        alert("Enemy Level cannot be greater than 83")
        text = 'stop';
        return;
    }

    if(enemyLvl < 1 ) {
        alert("Enemy Level cannot be less than 1");
        text = 'stop';
        return;
    }

    if(enemyLvl <= 15) {
        text += "<br> Damage Reduction Formula for levels 1-59 <br> ";
        for(i = 0; i < 11; i++) {
            damageReduction = (armor / ((85 * enemyLvl) + armor + 400)) * 100;
            y[i] = damageReduction;
            round = parseFloat(y[i]);
            round = Math.round(round);
            text += "Armor : " + armor + " Damage Reduction : " + round + "<br>";
            round = parseInt(round);
            x[i] = [armor, round];
            armor = armor + 500;
        }
    } else if (enemyLvl <= 30 ) {
        text += "<br> Damage Reduction Formula for levels 1-59 <br> ";
        for(i = 0; i < 11; i++) {
            damageReduction = (armor / ((85 * enemyLvl) + armor + 400)) * 100;
            y[i] = damageReduction;
            round = parseFloat(y[i]);
            round = Math.round(round);
            text += "Armor : " + armor + " Damage Reduction : " + round + "<br>";
            round = parseInt(round);
            x[i] = [armor, round];
            armor = armor + 1000;
        }
    } else if (enemyLvl < 60 ) {
        text += "<br> Damage Reduction Formula for levels 1-59 <br> ";
        for(i = 0; i < 11; i++) {
            damageReduction = (armor / ((85 * enemyLvl) + armor + 400)) * 100;
            y[i] = damageReduction;
            round = parseFloat(y[i]);
            round = Math.round(round);
            text += "Armor : " + armor + " Damage Reduction : " + round + "<br>";
            round = parseInt(round);
            x[i] = [armor, round];
            armor = armor + 2500;
        }
    } else if (enemyLvl < 80 ) {
        text += "<br> Damage Reduction Formula for levels 60-79 <br> ";
        for(i = 0; i < 11; i++) {
            damageReduction = (armor / ((467.5 * enemyLvl) + armor - 22167.5)) * 100;
            y[i] = damageReduction;
            round = parseFloat(y[i]);
            round = Math.round(round);
            text += "Armor : " + armor + " Damage Reduction : " + round + "<br>";
            round = parseInt(round);
            x[i] = [armor, round];
            armor = armor + 5000;
        }
    } else if (enemyLvl < 83) {
        text += "<br> Damage Reduction Formula for level 80-82 and Raid Bosses <br> ";
        for(i = 0; i < 11; i++) {
            damageReduction = (armor / ( armor + 15232.5)) * 100;
            y[i] = damageReduction;
            round = parseFloat(y[i]);
            round = Math.round(round);
            text += "Armor : " + armor + " Damage Reduction : " + round + "<br>";
            round = parseInt(round);
            x[i] = [armor, round];
            armor = armor + 5000;
        }
    } else if (enemyLvl == 83) {
        text += "<br> Damage Reduction Formula for level 83 and Raid Bosses <br> ";
        for(i = 0; i < 11; i++) {
            damageReduction = (armor / ( armor + 16635)) * 100;
            y[i] = damageReduction;
            round = parseFloat(y[i]);
            round = Math.round(round);
            text += "Armor : " + armor + " Damage Reduction : " + round + "<br>";
            round = parseInt(round);
            x[i] = [armor, round];
            armor = armor + 5000;
        }
    }
    demo.innerHTML = text;
}

function plot(){
	calculate();
    if(text == 'stop') return;
  chart = new Highcharts.Chart({
  							chart: {
                	renderTo: 'container',
                	type: 'line',
                	marginRight: 150,
                	marginBottom: 100
                }, title: {
                	text: "Damage Reduction based on Armor",
                  x: 5000 
                }, xAxis: {
                	title: {
                  	text: "Armor"
                  }
                }, yAxis: {
                	title: {
                  	text: "Damage Reduction %"
                  }
                }, plotOptions: {
                	scatter: {
                  	marker: {
                    	radius: 5,
                      states: {
                      	hover: {
                        	enabled: true,
                          lineColor: "rgb(100,100,100)"
                        }
                      }
                    }, states: {
                    	hover: {
                      	marker: {
                        	enabled: false
                        }
                      }
                    }
                  }
                }, series: [{
                	name: "Damage Reduction %",
                  color: "rgba(223,83,83,.5)",
                  data: x
                }]
  })
}