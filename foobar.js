const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isEven = (num) => num % 2 === 0;