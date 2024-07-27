const buildOutputPath = path.join(repositoryRootPath, 'out');
const isWeekday = (date) => date.getDay() % 6 !== 0;
const channelName = getChannelName(channel);