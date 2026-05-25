import fs from 'fs';
import path from 'path';

export default {
  register() {},
  async bootstrap({ strapi }) {
    const seedWeddings = async () => {
      const count = await strapi.documents('api::wedding.wedding').count();
      if (count > 0) return;
      console.log('Seeding weddings...');
      const filePath = path.resolve(__dirname, '../../../data-weddings.json');
      if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        for (const item of data) {
          try {
            await strapi.documents('api::wedding.wedding').create({
              data: {
                title: item.title,
                slug: item.slug,
                location: item.location,
                couple: item.couple,
                date: item.date ? new Date(item.date).toISOString().split('T')[0] : null,
                story: item.story,
                images: item.images,
                featured: item.featured || false,
                category: item.category || 'wedding',
                venue: item.venue || null,
                tags: item.tags || [],
              },
              status: 'published',
            });
          } catch (e) {
            console.error('Failed to seed wedding:', item.title, e.message);
          }
        }
        console.log('Weddings seeded');
      }
    };

    const seedTestimonials = async () => {
      const count = await strapi.documents('api::testimonial.testimonial').count();
      if (count > 0) return;
      console.log('Seeding testimonials...');
      const filePath = path.resolve(__dirname, '../../../data-testimonials.json');
      if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        for (const item of data) {
          try {
            await strapi.documents('api::testimonial.testimonial').create({
              data: {
                name: item.name,
                text: item.text,
                role: item.role,
              },
              status: 'published',
            });
          } catch (e) {
            console.error('Failed to seed testimonial:', item.name, e.message);
          }
        }
        console.log('Testimonials seeded');
      }
    };

    const seedVideos = async () => {
      const count = await strapi.documents('api::video.video').count();
      if (count > 0) return;
      console.log('Seeding videos...');
      const staticVideos = [
        {
          title: 'Häävideo Wedding video Vanessa ja Vesa, Finland',
          slug: 'vanessa-ja-vesa-finland',
          youtubeId: 'aQQ40Iegko8',
          thumbnailUrl: 'https://img.youtube.com/vi/aQQ40Iegko8/maxresdefault.jpg',
          provider: 'youtube',
          category: 'wedding',
          featured: true,
        },
        {
          title: 'Häävideo | Wedding video | Emmi & Lauri | Pornainen | Finland',
          slug: 'emmi-lauri-pornainen',
          youtubeId: 'Qj16eqM0Ze4',
          thumbnailUrl: 'https://img.youtube.com/vi/Qj16eqM0Ze4/maxresdefault.jpg',
          provider: 'youtube',
          category: 'wedding',
          featured: false,
        },
        {
          title: 'Summer Wedding In Espoo, Uusimaa, Finland',
          slug: 'summer-wedding-espoo',
          youtubeId: 'Isi5ZiFfoFs',
          thumbnailUrl: 'https://img.youtube.com/vi/Isi5ZiFfoFs/maxresdefault.jpg',
          provider: 'youtube',
          category: 'wedding',
          featured: false,
        },
        {
          title: 'Golden-Cut Parturi Promo',
          slug: 'golden-cut-parturi-promo',
          youtubeId: 'bGsd-RKtiEc',
          thumbnailUrl: 'https://img.youtube.com/vi/bGsd-RKtiEc/maxresdefault.jpg',
          provider: 'youtube',
          category: 'commercial',
          featured: false,
        },
      ];
      for (const item of staticVideos) {
        try {
          await strapi.documents('api::video.video').create({
            data: item,
            status: 'published',
          });
        } catch (e) {
          console.error('Failed to seed video:', item.title, e.message);
        }
      }
      console.log('Videos seeded');
    };

    // Set public read permissions for all content types
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
    if (publicRole) {
      const actions = [
        'api::wedding.wedding.find',
        'api::wedding.wedding.findOne',
        'api::testimonial.testimonial.find',
        'api::testimonial.testimonial.findOne',
        'api::portfolio.portfolio.find',
        'api::portfolio.portfolio.findOne',
        'api::journal.journal.find',
        'api::journal.journal.findOne',
        'api::video.video.find',
        'api::video.video.findOne',
        'api::homepage.homepage.find',
        'api::pricing.pricing.find',
        'api::faq.faq.find',
        'api::contact.contact.find',
      ];
      for (const action of actions) {
        const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({ where: { action, role: publicRole.id } });
        if (!existing) {
          await strapi.db.query('plugin::users-permissions.permission').create({ data: { action, role: publicRole.id } });
        }
      }
    }

    await seedWeddings();
    await seedTestimonials();
    await seedVideos();
  },
};
