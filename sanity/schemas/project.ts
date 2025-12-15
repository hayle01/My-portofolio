import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'status', title: 'Status', type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' }
        ],
        layout: 'radio'
      }
    }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'liveLink', title: 'Live Project Link', type: 'url' }),
    defineField({ name: 'githubLink', title: 'GitHub Link', type: 'url' }),
    defineField({ name: 'skills', title: 'Technologies/Skills', type: 'array', of: [{ type: 'reference', to: { type: 'skill' } }] }),
    defineField({ name: 'views', title: 'Project Views', type: 'number', initialValue: 0, readOnly: true }),
    defineField({ name: 'likes', title: 'Likes/Appreciations', type: 'number', initialValue: 0, readOnly: true }),
    defineField({ name: 'liveLinkClicks', title: 'Live Link Clicks', type: 'number', initialValue: 0, readOnly: true })
  ]
})
