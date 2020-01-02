function toPlainText (blocks = []) {
  return blocks
    .map(block => {
      if (block._type !== ‘block’ || !block.children) {
        return ‘’
      }
      return block.children.map(child => child.text).join(‘’)
    })
    .join(‘\n\n’)
}

function toPlainTextModule (blocks = []) {
  return blocks
    .map(block => {
      // console.log(‘hey?’, block)
      switch (block._type) {
        case ‘pageParagraph’:
          return block.paragraph.map(nB => {
            return nB.children.map(child => child.text).join(‘’)
          })
        case ‘teamMembers’:
          return block.members.map(nB => {
            const keys = Object.keys(nB)
            return keys.map(key => {
              return nB[key]
            })
          }).join(‘’)
      }
      if (block._type !== ‘block’ || !block.children) {
        return ‘’
      }
      return block.children.map(child => child.text).join(‘’)
    })
    .join(‘\n\n’)
}

const allSearch = []
searching.data.allSanitySearch.edges.forEach(edge => {
  const cleanUp = JSON.parse(edge.node.internal.content)
  // if (cleanUp.slug.current === ‘who-we-are’) {
  //   const test = toPlainTextModule(cleanUp.modules)
  // }
  if (cleanUp.slug) {
    let singleItem = {
      id: edge.node.id,
      title: cleanUp.title,
      // data: JSON.parse(edge.node.internal.content),
      type: cleanUp._type,
      slug: cleanUp.slug.current,
      category: cleanUp.categories ? cleanUp.categories[0].slug.current : ‘’,
      body: cleanUp.body ? toPlainText(cleanUp.body) : toPlainTextModule(cleanUp.modules)
    }
    allSearch.push(singleItem)
  }
})