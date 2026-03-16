const fs = require('fs');
const content = fs.readFileSync('lib/data/weddings.ts', 'utf8');
const urls = content.match(/https:\/\/images\.squarespace-cdn\.com\/[^\s\"\'\)]+/g) || [];
const counts = {};
const duplicates = [];
urls.forEach(url => {
    counts[url] = (counts[url] || 0) + 1;
});
for (const [url, count] of Object.entries(counts)) {
    if (count > 1) duplicates.push({ url, count });
}
console.log(JSON.stringify(duplicates, null, 2));
