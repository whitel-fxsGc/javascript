console.log("0 || 1 = "+(0 || 1));
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const symbolsPath = path.join(buildOutputPath, 'symbols');