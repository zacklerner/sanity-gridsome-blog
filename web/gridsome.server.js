// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')
const sanityFlatIndex = require('./static/flatIndex.json')
const fs = require('fs')

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })

  // Create a flat index from Sanity Posts
  function toPlainText(blocks = []) {
    return blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children, 
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the parapgraphs leaving split by two linebreaks
      .join('\n\n')
  }

  api.createPages(async ({ graphql }) => {

    const flatIndex = []

    const { data } = await graphql(`
      {
        allSanityPost {
          edges {
            node {
              title
              id
              path
              categories {
                id
                title
              }
              tags
              _rawBody
            }
          }
        }
      }
    `)

    data.allSanityPost.edges.forEach(({ node }) => {
      const doc = {
        title: node.title,
        id: node.id,
        path: node.path,
        tags: node.tags,
        body: toPlainText(node._rawBody)
      }

      flatIndex.push(doc)
    })

    console.log('*** FLATTENING SANITY POSTS!!! ***')

    let flatIndexData = JSON.stringify(flatIndex)
    fs.writeFileSync('static/flatIndex.json', flatIndexData)
  })

  api.loadSource(store => {
    const contentType = store.addCollection({
      typeName: 'SanityFlatIndex'
    })

    for (const item of sanityFlatIndex) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        path: item.path,
        tags: item.tags,
        body: item.body
      })
    }
  })
}
