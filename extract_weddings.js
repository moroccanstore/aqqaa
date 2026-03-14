const fs = require('fs');
const path = require('path');

const weddingsDir = 'D:\\dwra\\said\\webapp\\portfoliogridoverlayl';
const gridFile = 'D:\\dwra\\said\\webapp\\portfoliogridoverlayl.html';

// Extract weddings from the main grid
const gridContent = fs.readFileSync(gridFile, 'utf8');
const gridItems = [];
const gridRegex = /<a class="grid-item" href="portfoliogridoverlayl\/([^"]+)"[\s\S]*?<img [\s\S]*?alt="([^"]*)"/g;
let match;

while ((match = gridRegex.exec(gridContent)) !== null) {
  gridItems.push({
    slug: match[1].replace('.html', ''),
    title: match[2],
  });
}

console.log(`Found ${gridItems.length} weddings in grid.`);

const allWeddings = gridItems.map(item => {
  const filePath = path.join(weddingsDir, `${item.slug}.html`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return { ...item, images: [] };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const images = [];
  // More flexible regex for images
  const itemRegex = /<img [^>]*data-src="([^"]+)" [^>]*data-image-dimensions="(\d+)x(\d+)" [^>]*alt="([^"]*)"/g;
  let imgMatch;

  while ((imgMatch = itemRegex.exec(content)) !== null) {
    images.push({
        url: imgMatch[1],
        width: parseInt(imgMatch[2]),
        height: parseInt(imgMatch[3]),
        alt: imgMatch[4] || item.title
    });
  }

  return {
    ...item,
    images
  };
});

fs.writeFileSync('D:\\dwra\\said\\data\\weddings.json', JSON.stringify(allWeddings, null, 2));
console.log('Saved weddings data to D:\\dwra\\said\\data\\weddings.json');
