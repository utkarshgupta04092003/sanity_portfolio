import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'content',
      type: 'string',
      title: 'Content'
    }),
    defineField({
      name: 'launchat',
      type: 'datetime',
      title: 'Launch time at'
    }),
  ],
})