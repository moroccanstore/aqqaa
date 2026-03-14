const fs = require('fs');
const path = require('path');

const weddingsJson = fs.readFileSync('D:\\dwra\\said\\data\\weddings.json', 'utf8');
const weddings = JSON.parse(weddingsJson);

const tsContent = `export interface WeddingImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface Wedding {
  slug: string;
  title: string;
  images: WeddingImage[];
}

export const weddings: Wedding[] = ${JSON.stringify(weddings, null, 2)};
`;

fs.writeFileSync('D:\\dwra\\said\\lib\\data\\weddings.ts', tsContent);
console.log('Generated lib/data/weddings.ts');
