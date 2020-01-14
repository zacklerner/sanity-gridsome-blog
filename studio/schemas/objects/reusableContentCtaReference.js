export default {
  name: 'reusableContentCtaReference',
  type: 'object',
  title: 'CTA Reference',
  fields: [
    {
      name: 'reusableContentCta',
      type: 'reference',
      to: [
        {
          type: 'reusableContentCta'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'reusableContentCta.name',
      blocks: 'reusableContentCta.copy',
      media: 'reusableContentCta.image'
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