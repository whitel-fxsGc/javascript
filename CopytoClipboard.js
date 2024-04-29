const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';