export default {
  name: 'reusableContentCta',
  type: 'document',
  title: 'CTA',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name your CTA!'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'copy',
      type: 'bodyPortableText',
      title: 'Copy'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    }
  ],
  preview: {
    select: {
      title: 'name',
      blocks: 'copy',
      media: 'image'
    },
    prepare(value) {
      const title = (value.title || '') 
      const media = (value.media || null)
      const block = (value.blocks || []).find(block => block._type === 'block')
      return {
        title: title,
        media: media,
        subtitle: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No subtitle'
      }
    }
  }
}