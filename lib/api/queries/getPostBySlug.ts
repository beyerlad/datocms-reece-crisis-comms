import { metaTagsFragment } from '../fragments/metaTagsFragment'
import { postFragment } from '../fragments/postFragment'

const QUERY = `
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    
    post(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      ...postFragment
    }
  }

  ${metaTagsFragment}
  ${postFragment}
`

export function getPostBySlug(includeDrafts: boolean = false, slug: string) {
  return {
    query: QUERY,
    includeDrafts: includeDrafts,
    variables: {
      slug: slug,
    },
  }
}