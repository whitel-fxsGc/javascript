const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEven = (num) => num % 2 === 0;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const merge = [...new Set(a.concat(b))];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);