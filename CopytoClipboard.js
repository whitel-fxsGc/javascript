const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};