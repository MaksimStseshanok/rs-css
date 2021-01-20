export const saveCurrentLevel = (currentLevel) => {
  const gameObj = JSON.parse(localStorage.getItem("game"));
  // let completeLevels;
  // if (gameObj == null) {
  //   completeLevels = []
  // } else completeLevels = gameObj.complete

  // completeLevels.push(currentLevel);
  const game = {
    // complete: completeLevels,
    level: ++currentLevel,
  };
  localStorage.setItem('game', JSON.stringify(game));
};