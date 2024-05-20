const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const resultingPromises = urls.map((url) => makHttpRequest(url));