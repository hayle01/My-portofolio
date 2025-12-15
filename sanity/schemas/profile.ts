import { defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'bio', title: 'Biography', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'resume', title: 'Resume PDF', type: 'file' }),
    defineField({ name: 'resumeDownloads', title: 'Resume Downloads', type: 'number', initialValue: 0, readOnly: true }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'platform', title: 'Platform Name', type: 'string' }),
          defineField({ name: 'url', title: 'URL', type: 'url' }),
          defineField({ name: 'icon', title: 'Icon (SVG/Image)', type: 'image' }),
          defineField({ name: 'clicks', title: 'Clicks', type: 'number', initialValue: 0, readOnly: true })
        ]
      }]
    })
  ]
})
