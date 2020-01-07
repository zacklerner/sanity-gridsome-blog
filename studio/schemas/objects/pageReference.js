export default {
  name: 'pageReference',
  type: 'object',
  title: 'Page Reference',
  fields: [
    {
      name: 'pageReference',
      title: 'Page Reference Link',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }]
        }
      ]
    }
  ]
}