const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');