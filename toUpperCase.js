const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const fullName = name || 'buddy';
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;