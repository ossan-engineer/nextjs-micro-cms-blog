import React from 'react'
import useSWR from 'swr'

type Props = {
  page: number
}

const Data: React.FC<Props> = ({ page }) => {
  const { data } = useSWR<{ id: number; title: string }[]>(
    `/api/pagination?page=${page}&limit=3`
  )

  return (
    <div>
      {data?.map(({ id, title }) => (
        <>
          <div>id: {id}</div>
          <div>title: {title}</div>
        </>
      ))}
    </div>
  )
}

export default Data
