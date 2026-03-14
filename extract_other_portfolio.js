const fs = require('fs');
const path = require('path');

const webappDir = 'D:\\dwra\\said\\webapp';
const files = [
  'videos.html',
  'produvys.html',
  'portfolio-1.html',
  'portfolio-1-1.html',
  'portfolio-2.html',
  'portraits.html',
  'events.html',
  'portfolio-1-3.html'
];

const results = {};

files.forEach(file => {
  const filePath = path.join(webappDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const items = [];

  // Extract images
  const imgRegex = /<img [^>]*data-src="([^"]+)" [^>]*data-image-dimensions="(\d+)x(\d+)" [^>]*alt="([^"]*)"/g;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    items.push({
      type: 'image',
      url: imgMatch[1],
      width: parseInt(imgMatch[2]),
      height: parseInt(imgMatch[3]),
      alt: imgMatch[4]
    });
  }

  // Extract video blocks - more robust approach with string searching
  let startIndex = 0;
  const searchStr = 'data-block-json="';
  while ((startIndex = content.indexOf(searchStr, startIndex)) !== -1) {
    startIndex += searchStr.length;
    let endIndex = startIndex;
    
    // Find closing " by looking for " followed by a space, > or the end of a tag
    while (endIndex < content.length) {
      if (content[endIndex] === '"' && (content[endIndex+1] === ' ' || content[endIndex+1] === '>' || content[endIndex+1] === '/')) {
        break;
      }
      endIndex++;
    }

    const raw = content.substring(startIndex, endIndex);
    try {
      const decoded = raw
        .replace(/&quot;/g, '"')
        .replace(/&#123;/g, '{')
        .replace(/&#125;/g, '}')
        .replace(/&#39;/g, "'")
        .replace(/\\"/g, '"');
      
      const videoData = JSON.parse(decoded);
      const url = videoData.url || (videoData.nativeVideo ? videoData.nativeVideo : null);
      
      if (url) {
        items.push({
          type: 'video',
          url: url,
          thumbnail: videoData.thumbnailUrl,
          provider: videoData.providerName || (videoData.nativeVideo ? 'hosted' : 'unknown'),
          title: videoData.title || ''
        });
      }
    } catch (e) {
      // console.error(`Error parsing video at index ${startIndex}:`, e.message);
    }
    startIndex = endIndex;
  }

  results[file.replace('.html', '')] = items;
});

fs.writeFileSync('D:\\dwra\\said\\data\\portfolio_other.json', JSON.stringify(results, null, 2));
console.log('Saved other portfolio data to D:\\dwra\\said\\data\\portfolio_other.json');
