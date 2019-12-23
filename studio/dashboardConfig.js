export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e00f88ec739e9487641e248',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-5tkr9k55',
                  apiId: '17a0f3b9-46be-4118-95ed-39765814d469'
                },
                {
                  buildHookId: '5e00f88fac0a3c00c565cc90',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-eiemmbzx',
                  apiId: '63a359a4-0ec1-423c-a2a1-6f2dc9f416f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacklerner/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-eiemmbzx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
