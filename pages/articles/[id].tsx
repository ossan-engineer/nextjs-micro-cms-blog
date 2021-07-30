// import React from 'react'
import { useRouter } from 'next/router'

const Article: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>ID: {id}</div>
}

export default Article
