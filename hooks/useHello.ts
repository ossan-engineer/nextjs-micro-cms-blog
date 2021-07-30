import useSWR from 'swr'

const useHello = () => {
  const { data, error } = useSWR('/api/hello')

  return {
    data,
    loading: !error && !data,
    error
  }
}

export default useHello
