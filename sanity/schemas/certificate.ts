import { defineField, defineType } from 'sanity'

export const certificate = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Certificate Title', type: 'string' }),
    defineField({ name: 'issuer', title: 'Issuer', type: 'string' }),
    defineField({ name: 'date', title: 'Date Issued', type: 'date' }),
    defineField({ name: 'link', title: 'Credential URL', type: 'url' }),
    defineField({ name: 'image', title: 'Certificate Image', type: 'image' })
  ]
})
