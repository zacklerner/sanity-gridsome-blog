export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      name: 'menuTitle',
      type: 'string',
      title: 'Menu TItle'
    },
    {
      name: 'menuSlug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'menuTitle',
        maxLength: 96
      }
    },
    {
      name: 'menuItems',
      type: 'array',
      description: 'Once a page has been published you can add it here and it will appear in the primary navigation menu',
      title: 'Menu Items',
      of: [
        {
          name: 'menuReference',
          title: 'Sub-menu',
          type: 'menuReference'
        }
      ]
    }
  ]
}