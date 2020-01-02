// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')
const search = require('./static/search.json')

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })

  // Add local JSON file for search
  api.loadSource(store => {
    const contentType = store.addCollection({
      typeName: 'Search'
    })

    for (const item of search) {
      contentType.addNode({
        id: item.id,
        title: item.title
      })
    }
  })

  // // Create pages from GraphQL (product review example)
  // api.createPages(async ({ graphql, createPage }) => {
  //   const { data } = await graphql(`
  //     {
  //       allProduct {
  //         edges {
  //           node {
  //             id
  //             path
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   data.allProduct.edges.forEach(({ node }) => {
  //     createPage({
  //       path: `${node.path}/reviews`,
  //       component: './src/templates/ProductReviews.vue',
  //       context: {
  //         id: node.id
  //       }
  //     })
  //   })
  // })
}
