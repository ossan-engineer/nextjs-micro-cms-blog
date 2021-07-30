import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  const body = { message: 'Hello' }
  res.statusCode = 200
  res.json(body)
}

export default handler
