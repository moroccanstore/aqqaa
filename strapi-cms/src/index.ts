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
                images: item.images, // We store this as JSON for now
                featured: item.featured || false,
                category: item.category || 'wedding',
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
        'api::homepage.homepage.find',
        'api::pricing.pricing.find',
        'api::faq.faq.find',
        'api::contact.contact.find'
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
  },
};
