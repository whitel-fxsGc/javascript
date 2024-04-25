const getRandomBoolean = () => Math.random() >= 0.5;
console.log("0 || 1 = "+(0 || 1));
const scriptRootPath = path.join(repositoryRootPath, 'script');
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isTabInView = () => !document.hidden;