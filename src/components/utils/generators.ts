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

export const generateTableProblems = (table: number) => {
  const allPossibles = [];
  for (let i = 2; i <= 9; i++) {
    allPossibles.push({
      display: `${table}x${i}`,
      solution: table * i,
    });
  }
  return allPossibles;
};

export const shuffleArray = (a: any) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const generateSuggestions = (current: any, all: any) => {
  const allSolutions = [...all].filter(
    (sol: any) => current.display !== sol.display
  );

  const suggestions = [current.solution];

  for (let i = 0; i < 3; i++) {
    const suggest = allSolutions[getRandomInt(allSolutions.length)];
    suggestions.push(suggest.solution);
    const index = allSolutions.findIndex(
      (e: any) => e.display === suggest.display
    );
    allSolutions.splice(index, 1);
  }

  return shuffleArray(suggestions);
};
