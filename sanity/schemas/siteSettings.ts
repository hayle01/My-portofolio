import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string' }),
    defineField({ name: 'description', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'totalVisits', title: 'Total Visits', type: 'number', initialValue: 0, readOnly: true }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
  ]
})
