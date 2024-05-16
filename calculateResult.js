const randomBoolean = () => Math.random() >= 0.5;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);