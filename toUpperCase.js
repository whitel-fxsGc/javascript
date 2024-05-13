const merge = (a, b) => a.concat(b);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const channel = getChannel(computedAppVersion);