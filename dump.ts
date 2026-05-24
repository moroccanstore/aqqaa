import fs from 'fs';
import { weddings } from './lib/data/weddings';
import { testimonials } from './lib/data/testimonials';

fs.writeFileSync('data-weddings.json', JSON.stringify(weddings, null, 2), 'utf8');
fs.writeFileSync('data-testimonials.json', JSON.stringify(testimonials, null, 2), 'utf8');
console.log('Dumped json successfully');
