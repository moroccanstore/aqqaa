const fs = require('fs');

const lines = fs.readFileSync('D:\\dwra\\said\\extracted_images.txt', 'utf8')
    .split('\n')
    .filter(l => l.trim());

// Filter out srcset size variants (lines ending in =100w, =300w, etc. or just size suffixes)
const baseUrls = lines.filter(l => {
    // Remove lines that are just size suffixes like "t=1500w"
    if (/^t=\d+w$/.test(l.trim())) return false;
    // Remove lines that are format variants like ?format=1000w
    if (/\?format=\d+w$/.test(l)) return false;
    // Remove lines that are broken format params like "=1000w"
    if (/^=\d+w$/.test(l.trim())) return false;
    return true;
});

console.log('Total raw links:', lines.length);
console.log('Clean base image URLs:', baseUrls.length);

// Save clean version
fs.writeFileSync('D:\\dwra\\said\\extracted_images_clean.txt', baseUrls.join('\n'), 'utf8');
console.log('Saved to extracted_images_clean.txt');

// Show first 30 as sample
console.log('\n--- Sample (first 30 URLs) ---');
baseUrls.slice(0, 30).forEach((url, i) => console.log(`${i + 1}. ${url}`));
