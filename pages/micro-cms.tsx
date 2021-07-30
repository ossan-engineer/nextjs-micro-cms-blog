import { InferGetStaticPropsType } from 'next'

import { client } from 'libs/client'

type Props = InferGetStaticPropsType<typeof getStaticProps>

type News = {
  date: string
  paragraph: string
}

type StaticProps = {
  contents: News[]
  totalCount: number
  offset: number
  limit: number
}

const MicroCMS: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.contents.map(({ date, paragraph }) => (
        <div key={date}>
          <div>date: {date}</div>
          <div>paragraph: {paragraph}</div>
        </div>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get<StaticProps>({
    endpoint: 'news'
  })

  return {
    props: {
      data
    }
  }
}

export default MicroCMS
