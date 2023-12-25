import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/sso/', '/login/'],
    },
    sitemap: 'https://pramuka2wonoayu.my.id/sitemap.xml',
  }
}
