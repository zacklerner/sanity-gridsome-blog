# My docs

## Gridsome Plugins Included

### @gridsome/plugin-sitemap

You'll probably need to generate a sitemap for your site, but feel free to remove this if you don't! Make sure to add the appropriate `siteUrl` to [gridsome.config.js](https://gridsome.org/docs/config/#siteurl). More complete documentation on the plugin can be found [here](https://gridsome.org/plugins/@gridsome/plugin-sitemap).

### @gridsome/plugin-flexsearch

Solid integration of FlexSearch.js with Gridsome. Flexsearch currently has limited support for search within nested data structures. In order to properly search Sanity's implementation of Portable Text blocks will have to be flattened and stored in a custom index for the time being. This is a top priority on the [roadmap for this base theme](#roadmap).

More complete documentation on the plugin can be found [here](https://gridsome.org/plugins/gridsome-plugin-flexsearch)

## Roadmap

1. Warn if siteUrl not set or prompt for siteUrl on installation

---

# Sanity Starter Docs - Blog with Gridsome

_Fully customizable blog template with a Vue.js front-end._

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-gridsome-blog).

## What you have

- A fast by default blog with [Gridsome](https://gridsome.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8080](http://localhost:8080)
4. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/v9n856vf/settings/api) and create a token with read rights.
2. Rename `.env.development.tenplate` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to turn off preview you can set `watchMode: false` in gridsome-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gridsome-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

This starter comes with a Netlify-widget that lets you trigger new deploys from Sanity Studio.

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
