const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isEmptyObject = obj => Object.keys(obj).length === 0;
const result = await makeHttpRequest(url);