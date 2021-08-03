import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { Button, lighten } from '@material-ui/core'

import { client } from 'libs/client'

type Props = InferGetStaticPropsType<typeof getStaticProps>

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

const Home: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <ul>
        {blog.map((b) => (
          <li key={b.id}>
            <Link href={`/blog/${b.id}`}>
              <a>{b.title}</a>
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
      blog: data.contents
    }
  }
}

export default Home
