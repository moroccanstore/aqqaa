const fs = require('fs');
const path = require('path');

const contentDir = 'D:\\dwra\\said\\content';
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.avif'];
const imageFiles = [];

// 1. Walk content directory
function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            const ext = path.extname(item).toLowerCase();
            if (imageExtensions.includes(ext)) {
                const relativePath = fullPath.replace(contentDir + '\\', '').replace(/\\/g, '/');
                imageFiles.push(relativePath);
            }
        }
    });
}

walkDir(contentDir);
console.log('Total local image files found:', imageFiles.length);

// 2. Process content_images - Copy.txt (if it exists)
let externalUrls = [];
const copyFile = 'D:\\dwra\\said\\content_images - Copy.txt';
if (fs.existsSync(copyFile)) {
    const rawContent = fs.readFileSync(copyFile, 'utf8');
    externalUrls = rawContent.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
}
console.log('Total external URLs found:', externalUrls.length);

// 3. Clean and merge
function cleanUrl(url) {
    // Remove query params like ?format=1000w
    return url.split('?')[0];
}

const cleanExternalSet = new Set(externalUrls.map(cleanUrl));
const cdnBase = 'https://images.squarespace-cdn.com/content/';
const cleanLocalCdnUrls = imageFiles.map(p => cdnBase + p);

const allCleanUrls = new Set([...cleanExternalSet, ...cleanLocalCdnUrls]);

// 4. Save results
fs.writeFileSync('D:\\dwra\\said\\content_images.txt', imageFiles.join('\n'), 'utf8');
fs.writeFileSync('D:\\dwra\\said\\content_images_cdn_urls.txt', Array.from(new Set(externalUrls)).join('\n'), 'utf8'); // User wants this correctly populated
fs.writeFileSync('D:\\dwra\\said\\extracted_images_clean.txt', Array.from(allCleanUrls).sort().join('\n'), 'utf8');

console.log('Results saved:');
console.log('- content_images.txt:', imageFiles.length, 'lines');
console.log('- content_images_cdn_urls.txt:', Array.from(new Set(externalUrls)).length, 'lines');
console.log('- extracted_images_clean.txt:', allCleanUrls.size, 'lines');
