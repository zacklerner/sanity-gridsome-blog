import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import FaRecycle from 'react-icons/lib/fa/recycle'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'menu', 'post', 'page', 'siteSettings', 'reusableContentCta'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Header'),
      S.listItem()
        .title('Footer'),
      S.divider(),
      S.listItem()
        .title('Menus')
        .child(
          S.list()
            .title('Menus')
            .items([
              S.listItem()
                .title('Main Nav')
                .child(
                  S.editor()
                  .id('mainNav')
                  .schemaType('menu')
                ),
              S.listItem()
                .title('Footer Menu')
                .child(
                  S.editor()
                  .id('footerMenu')
                  .schemaType('menu')
                )
            ])
        ),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Products'),
      S.listItem()
        .title('Sea Stories'),
      S.listItem()
        .title('Reusable Content Blocks')
        .icon(FaRecycle)
        .child(
          S.list()
            .title('Reusable Content Blocks')
            .items([
              S.listItem()
                .title('CTAs')
                .child(S.documentTypeList('reusableContentCta').title('CTAs')),
              S.listItem()
                .title('Sliders'),
              S.listItem()
                .title('Forms')
            ])
        ),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
