function startBattle(player) {
  let requiredPower = player.level * 20;
  let win = player.power >= requiredPower;
  return {
    win,
    requiredPower,
    currentPower: player.power,
    level: player.level,
  };
}
