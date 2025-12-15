import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Person Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role/Position', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'image', title: 'Photo', type: 'image' }),
    defineField({ name: 'text', title: 'Quote', type: 'text' })
  ]
})
