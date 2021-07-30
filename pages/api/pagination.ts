import type { NextApiRequest, NextApiResponse } from 'next'

const DATA = [
  {
    id: 1,
    title: 'aaa'
  },
  {
    id: 2,
    title: 'bbb'
  },
  {
    id: 3,
    title: 'ccc'
  },
  {
    id: 4,
    title: 'ddd'
  },
  {
    id: 5,
    title: 'eee'
  },
  {
    id: 6,
    title: 'fff'
  },
  {
    id: 7,
    title: 'ggg'
  },
  {
    id: 8,
    title: 'hhh'
  },
  {
    id: 9,
    title: 'iii'
  },
  {
    id: 10,
    title: 'jjj'
  },
  {
    id: 11,
    title: 'kkk'
  },
  {
    id: 12,
    title: 'lll'
  }
]

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { page, limit = 10 },
    method
  } = req

  const filteredData = DATA.filter(
    (_, index) =>
      index >= (Number(page) - 1) * Number(limit) &&
      index < Number(page) * Number(limit)
  )

  switch (method) {
    case 'GET':
      res.status(200).json(filteredData)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
