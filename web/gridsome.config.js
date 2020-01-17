// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Gridsome Blog Starter',
  siteUrl: 'localhost:8080',
  siteDescription:
    'A simple, hackable & minimalistic starter for Gridsome that uses structured content from Sanity.io.',

  templates: {
    SanityPost: '/blog/:slug__current',
    SanityPage: '/:slug__current'
  },

  plugins: [
    // Sanity source plugin config
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },
    // Flexsearch plugin config
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'SanityFlatIndex',
            indexName: 'SanityFlatIndex',
            fields: ['title', 'id', 'path', 'tags', 'body']
          }
        ],
        searchFields: ['title', 'tags', 'body']
      }
    },
    // Sitemap plugin
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    }
  ]
}
