const timeFromDate = date => date.toTimeString().slice(0, 8);
const arrayContains = (arr, element) => arr.includes(element);
const results = await Promise.all(resultingPromises);