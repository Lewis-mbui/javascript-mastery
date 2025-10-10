const player = { name: "Messi", goals: 10 };

function addStat(obj, stat, value) {
  obj[stat] = value;
}

addStat(player, 'assists', 5);
console.log(player);
addStat(player, 'yellowCards', 1);
console.log(player);
player.redCards = 0;
console.log(player);