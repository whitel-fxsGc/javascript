const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const goToTop = () => window.scrollTo(0, 0);