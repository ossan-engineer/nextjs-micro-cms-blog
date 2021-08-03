import Link from 'next/link'

import { client } from 'libs/client'

type Props = {
  posts: Post[]
}

type Post = {
  id: string
  title: string
  body: string
}

type StaticProps = {
  contents: Post[]
  totalCount: number
  offset: number
  limit: number
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get<StaticProps>({ endpoint: 'blog' })

  return {
    props: {
      posts: data.contents
    }
  }
}

export default Home
