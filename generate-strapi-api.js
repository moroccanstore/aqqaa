const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, 'strapi-cms', 'src', 'api');

const models = [
  {
    name: 'wedding',
    plural: 'weddings',
    schema: {
      kind: 'collectionType',
      collectionName: 'weddings',
      info: { singularName: 'wedding', pluralName: 'weddings', displayName: 'Wedding' },
      options: { draftAndPublish: true },
      attributes: {
        title: { type: 'string', required: true },
        slug: { type: 'uid', targetField: 'title', required: true },
        location: { type: 'string' },
        couple: { type: 'string' },
        date: { type: 'date' },
        story: { type: 'text' },
        images: { type: 'json' }, // We'll stick to JSON for images initially to match existing data shape easily, or Cloudinary
        featured: { type: 'boolean', default: false },
        category: { type: 'string' }
      }
    }
  },
  {
    name: 'testimonial',
    plural: 'testimonials',
    schema: {
      kind: 'collectionType',
      collectionName: 'testimonials',
      info: { singularName: 'testimonial', pluralName: 'testimonials', displayName: 'Testimonial' },
      options: { draftAndPublish: false },
      attributes: {
        name: { type: 'string', required: true },
        text: { type: 'text', required: true },
        role: { type: 'string' }
      }
    }
  }
];

models.forEach(model => {
  const modelDir = path.join(apiPath, model.name);
  const typesDir = path.join(modelDir, 'content-types', model.name);
  const controllersDir = path.join(modelDir, 'controllers');
  const servicesDir = path.join(modelDir, 'services');
  const routesDir = path.join(modelDir, 'routes');

  [typesDir, controllersDir, servicesDir, routesDir].forEach(dir => {
    fs.mkdirSync(dir, { recursive: true });
  });

  fs.writeFileSync(path.join(typesDir, 'schema.json'), JSON.stringify(model.schema, null, 2));

  const content = `import { factories } from '@strapi/strapi';\n\nexport default factories.createCore`;
  const apiId = `api::${model.name}.${model.name}`;

  fs.writeFileSync(path.join(controllersDir, `${model.name}.ts`), `${content}Controller('${apiId}');\n`);
  fs.writeFileSync(path.join(servicesDir, `${model.name}.ts`), `${content}Service('${apiId}');\n`);
  fs.writeFileSync(path.join(routesDir, `${model.name}.ts`), `${content}Router('${apiId}');\n`);

  console.log(`Created ${model.name} API`);
});
