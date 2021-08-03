import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'nextjs-micro-cms-blog',
  apiKey: process.env.API_KEY || ''
})
