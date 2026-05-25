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
  wedding: {
    kind: 'collectionType',
    collectionName: 'weddings',
    info: { singularName: 'wedding', pluralName: 'weddings', displayName: 'Wedding', description: 'Wedding stories and galleries' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      slug: { type: 'uid', targetField: 'title', required: true },
      date: { type: 'date' },
      venue: { type: 'string' },
      location: { type: 'string' },
      description: { type: 'text' },
      featured: { type: 'boolean', default: false },
      images: { type: 'media', multiple: true, required: false, allowedTypes: ['images'] }
    }
  },
  video: {
    kind: 'collectionType',
    collectionName: 'videos',
    info: { singularName: 'video', pluralName: 'videos', displayName: 'Video Project', description: 'Video portfolio items' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      youtubeId: { type: 'string', required: true },
      category: { type: 'enumeration', enum: ['wedding', 'commercial', 'project'], required: true },
      thumbnail: { type: 'string' } // Could be media, but youtube thumbnail URL is fine
    }
  },
  testimonial: {
    kind: 'collectionType',
    collectionName: 'testimonials',
    info: { singularName: 'testimonial', pluralName: 'testimonials', displayName: 'Testimonial', description: 'Client reviews' },
    options: { draftAndPublish: true },
    attributes: {
      name: { type: 'string', required: true },
      text: { type: 'text', required: true },
      rating: { type: 'integer', default: 5 }
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
      description: { type: 'text' },
      heroImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      packages: { type: 'json' } // Array of packages
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
      description: { type: 'text' },
      email: { type: 'string' },
      phone: { type: 'string' },
      whatsapp: { type: 'string' },
      blockedDates: { type: 'json' } // Array of blocked dates strings
    }
  },
  about: {
    kind: 'singleType',
    collectionName: 'about',
    info: { singularName: 'about', pluralName: 'abouts', displayName: 'About Page', description: 'About Page Content' },
    options: { draftAndPublish: true },
    attributes: {
      heroTitle: { type: 'string' },
      heroSubtitle: { type: 'string' },
      heroImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      introTitle: { type: 'string' },
      introHeading: { type: 'string' },
      introBio: { type: 'text' },
      introImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      philosophyTitle: { type: 'string' },
      philosophy: { type: 'text' },
      stats: { type: 'json' }, // Array of stats {id, value}
      processGallery: { type: 'media', multiple: true, required: false, allowedTypes: ['images'] }
    }
  },
  privacy: {
    kind: 'singleType',
    collectionName: 'privacy',
    info: { singularName: 'privacy', pluralName: 'privacies', displayName: 'Privacy Policy', description: 'Privacy Policy Content' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string' },
      heroImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      content: { type: 'richtext', required: true }
    }
  },
  terms: {
    kind: 'singleType',
    collectionName: 'terms',
    info: { singularName: 'terms', pluralName: 'terms-of-services', displayName: 'Terms of Service', description: 'Terms of Service Content' },
    options: { draftAndPublish: true },
    attributes: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string' },
      heroImage: { type: 'media', multiple: false, required: false, allowedTypes: ['images'] },
      content: { type: 'richtext', required: true }
    }
  },
  global: {
    kind: 'singleType',
    collectionName: 'global',
    info: { singularName: 'global', pluralName: 'globals', displayName: 'Global Settings', description: 'Site-wide settings and contact info' },
    options: { draftAndPublish: true },
    attributes: {
      address: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
      instagramUrl: { type: 'string' },
      youtubeUrl: { type: 'string' },
      facebookUrl: { type: 'string' },
      footerDescription: { type: 'text' }
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
