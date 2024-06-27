const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isEmptyObject = obj => Object.keys(obj).length === 0;