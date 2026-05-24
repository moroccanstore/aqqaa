const fs = require('fs');
const path = require('path');

const apiPath = path.resolve(__dirname, 'strapi-cms/src/api');

const schemas = {
  // Collection Types
  portfolio: {
    kind: 'collectionType',
    collectionName: 'portfolios',
    info: { singularName: 'portfolio', pluralName: 'portfolios', displayName: 'Portfolio Item', description: 'Curated portfolio pieces' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      slug: { type: 'uid', targetField: 'title', required: true },
      category: { type: 'enumeration', enum: ['weddings', 'portraits', 'events', 'commercial'], required: true },
      coverImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      images: { type: 'media', multiple: true, required: false, allowedTypes: ['images'] },
      featured: { type: 'boolean', default: false }
    }
  },
  journal: {
    kind: 'collectionType',
    collectionName: 'journals',
    info: { singularName: 'journal', pluralName: 'journals', displayName: 'Journal Post', description: 'Blog and news articles' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      slug: { type: 'uid', targetField: 'title', required: true },
      content: { type: 'richtext', required: true },
      coverImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      publishDate: { type: 'date', required: true }
    }
  },
  // Single Types
  homepage: {
    kind: 'singleType',
    collectionName: 'homepage',
    info: { singularName: 'homepage', pluralName: 'homepages', displayName: 'Homepage', description: 'Homepage Hero & Meta' },
    options: { draftAndPublish: true },
    attributes: {
      heroTitle: { type: 'string', required: true },
      heroSubtitle: { type: 'string' },
      heroDescription: { type: 'text' },
      heroImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] }
    }
  },
  pricing: {
    kind: 'singleType',
    collectionName: 'pricing',
    info: { singularName: 'pricing', pluralName: 'pricings', displayName: 'Pricing Page', description: 'Investment & Pricing details' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string' },
      description: { type: 'text' }
    }
  },
  faq: {
    kind: 'singleType',
    collectionName: 'faq',
    info: { singularName: 'faq', pluralName: 'faqs', displayName: 'FAQ Page', description: 'Frequently Asked Questions' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      description: { type: 'text' }
    }
  },
  contact: {
    kind: 'singleType',
    collectionName: 'contact',
    info: { singularName: 'contact', pluralName: 'contacts', displayName: 'Contact Page', description: 'Contact Info & Text' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string' },
      description: { type: 'text' }
    }
  }
};

Object.entries(schemas).forEach(([name, schema]) => {
  const modelPath = path.join(apiPath, name, 'content-types', name);
  const routePath = path.join(apiPath, name, 'routes');
  const controllerPath = path.join(apiPath, name, 'controllers');
  const servicePath = path.join(apiPath, name, 'services');

  fs.mkdirSync(modelPath, { recursive: true });
  fs.mkdirSync(routePath, { recursive: true });
  fs.mkdirSync(controllerPath, { recursive: true });
  fs.mkdirSync(servicePath, { recursive: true });

  // schema.json
  fs.writeFileSync(path.join(modelPath, 'schema.json'), JSON.stringify(schema, null, 2));

  // routes
  const routeContent = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreRouter('api::${name}.${name}');`;
  fs.writeFileSync(path.join(routePath, `${name}.ts`), routeContent);

  // controllers
  const controllerContent = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreController('api::${name}.${name}');`;
  fs.writeFileSync(path.join(controllerPath, `${name}.ts`), controllerContent);

  // services
  const serviceContent = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreService('api::${name}.${name}');`;
  fs.writeFileSync(path.join(servicePath, `${name}.ts`), serviceContent);
});

console.log('Successfully generated Strapi schemas!');
