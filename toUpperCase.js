const allResults = await Promise.all(items.map(async (item) => {}));
const resultingPromises = urls.map((url) => makHttpRequest(url));
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);