export default {
  name: 'menuReference',
  title: 'Sub-menu',
  type: 'object',
  fields: [
    {
      name: 'menuTitle',
      type: 'string',
      title: 'Menu Title'
    },
    {
      name: 'menuLink',
      type: 'pageReference',
      title: 'Menu Link(s)'
    }
  ]
}