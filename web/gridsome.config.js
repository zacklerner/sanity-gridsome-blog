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
            typeName: 'SanityPost',
            indexName: 'SanityPost',
            fields: ['title', 'tags', 'body.children']
          },
          {
            typeName: 'SanityPage',
            indexName: 'SanityPage',
            fields: ['title', 'body.children']
          },
          {
            typeName: 'Search',
            indexName: 'Search',
            fields: ['title', 'id']
          }
        ],
        searchFields: ['title', 'tags', 'body.children']
      }
    },
    // Sitemap plugin
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    }
    /* {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      },
      {

      }
    } */
  ]
}

const fs = require('fs')

let student = { 
  name: 'Bike',
  age: 23, 
  gender: 'Male',
  department: 'English',
  car: 'Honda' 
}

let data = JSON.stringify(student)
fs.writeFileSync('static/students.json', data)