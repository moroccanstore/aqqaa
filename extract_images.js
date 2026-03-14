const fs = require('fs');
const path = require('path');

const webappDir = 'D:\\dwra\\said\\webapp';
const imageLinks = new Set();

function extractImagesFromFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Match src attributes in img tags
        const imgSrcRegex = /<img[^>]+src=["']([^"']+)["']/gi;
        // Match srcset attributes
        const srcsetRegex = /srcset=["']([^"']+)["']/gi;
        // Match background-image in style attributes
        const bgImageRegex = /background-image\s*:\s*url\(["']?([^"')]+)["']?\)/gi;
        // Match data-src attributes (lazy loading)
        const dataSrcRegex = /data-src=["']([^"']+)["']/gi;

        let match;
        while ((match = imgSrcRegex.exec(content)) !== null) {
            imageLinks.add(match[1]);
        }
        while ((match = srcsetRegex.exec(content)) !== null) {
            const parts = match[1].split(',');
            parts.forEach(part => {
                const url = part.trim().split(/\s+/)[0];
                if (url) imageLinks.add(url);
            });
        }
        while ((match = bgImageRegex.exec(content)) !== null) {
            imageLinks.add(match[1]);
        }
        while ((match = dataSrcRegex.exec(content)) !== null) {
            imageLinks.add(match[1]);
        }
    } catch (e) {
        console.error('Error reading file:', filePath, e.message);
    }
}

function walkDir(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (item.endsWith('.html')) {
            extractImagesFromFile(fullPath);
        }
    });
}

walkDir(webappDir);

const sorted = Array.from(imageLinks).sort();
console.log('Total image links found:', sorted.length);
console.log('---');
sorted.forEach(link => console.log(link));

// Also save to a file
fs.writeFileSync('D:\\dwra\\said\\extracted_images.txt', sorted.join('\n'), 'utf8');
console.log('\nSaved to extracted_images.txt');
