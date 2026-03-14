const fs = require('fs');
const path = require('path');

const contentDir = 'D:\\dwra\\said\\content';
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.avif'];
const imageFiles = [];

function walkDir(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            const ext = path.extname(item).toLowerCase();
            if (imageExtensions.includes(ext)) {
                // Get relative path from content dir
                const relativePath = fullPath.replace(contentDir + '\\', '').replace(/\\/g, '/');
                imageFiles.push({
                    file: item,
                    relativePath: relativePath,
                    fullPath: fullPath,
                    size: stat.size
                });
            }
        }
    });
}

walkDir(contentDir);

console.log('Total image files found:', imageFiles.length);
console.log('---');
imageFiles.forEach(img => {
    console.log(img.relativePath);
});

// Save full list
const lines = imageFiles.map(img => img.relativePath);
fs.writeFileSync('D:\\dwra\\said\\content_images.txt', lines.join('\n'), 'utf8');
console.log('\nSaved to content_images.txt');

// Also save as Squarespace CDN URLs (matching the pattern from webapp)
const cdnBase = 'https://images.squarespace-cdn.com/content/';
const cdnUrls = imageFiles.map(img => cdnBase + img.relativePath);
fs.writeFileSync('D:\\dwra\\said\\content_images_cdn_urls.txt', cdnUrls.join('\n'), 'utf8');
console.log('Saved CDN URLs to content_images_cdn_urls.txt');

// Stats by extension
const byExt = {};
imageFiles.forEach(img => {
    const ext = path.extname(img.file).toLowerCase();
    byExt[ext] = (byExt[ext] || 0) + 1;
});
console.log('\n--- By file type ---');
Object.entries(byExt).sort((a, b) => b[1] - a[1]).forEach(([ext, count]) => {
    console.log(`${ext}: ${count}`);
});
