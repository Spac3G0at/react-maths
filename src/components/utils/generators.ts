export const generateProblems = (
  maxNumberToMultiply: number,
  quantity: number
) => {
  const allPossibles = [];
  for (let i = 2; i <= maxNumberToMultiply; i++) {
    for (let j = 2; j <= 9; j++) {
      allPossibles.push({
        display: `${i}x${j}`,
        solution: i * j,
      });
    }
  }

  const probs: any = [];
  for (let i = 0; i < quantity; i++) {
    const randomIndex = getRandomInt(allPossibles.length);
    if (allPossibles[randomIndex]) probs.push(allPossibles[randomIndex]);
    allPossibles.splice(randomIndex, 1);
  }

  return probs;
};

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};
