import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'nextjs-micro-cms-blog',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || ''
})
