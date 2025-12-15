import { defineField, defineType } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Skill Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'icon', title: 'Icon', type: 'image' }),
    defineField({ name: 'proficiency', title: 'Proficiency (0-100)', type: 'number' }),
    defineField({ name: 'category', title: 'Category', type: 'string',
      options: {
        list: ['Frontend', 'Backend', 'DevOps', 'Design', 'Other']
      }
    })
  ]
})
