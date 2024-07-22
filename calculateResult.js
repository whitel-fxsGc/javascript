const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);