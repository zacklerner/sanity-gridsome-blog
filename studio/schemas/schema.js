// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import menu from './documents/menu'
import page from './documents/page'
import post from './documents/post'
import reusableContentCta from './documents/reusableContentCta'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import pageReference from './objects/pageReference'
import authorReference from './objects/authorReference'
import reusableContentCtaReference from './objects/reusableContentCtaReference'
import menuReference from './objects/menuReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    reusableContentCta,
    menu,
    post,
    page,
    category,
    author,
    mainImage,
    authorReference,
    reusableContentCtaReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    pageReference,
    menuReference

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
