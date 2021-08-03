import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { client } from 'libs/client'

type Props = {
  post: Post
}

type Post = {
  id: string
  title: string
  body: string
  category: {
    name: string
  }
  publishedAt: string
}

type StaticProps = {
  contents: Post[]
  totalCount: number
  offset: number
  limit: number
}

const BlogDetail: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <p>{post.category?.name}</p>
      <div dangerouslySetInnerHTML={{ __html: `${post.body}` }}></div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<StaticProps>({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string
  const data = await client.get<StaticProps>({
    endpoint: 'blog',
    contentId: id
  })
  return {
    props: {
      post: data
    }
  }
}

export default BlogDetail
