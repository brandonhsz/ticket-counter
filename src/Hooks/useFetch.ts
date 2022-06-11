import { useState } from 'react'

export const useFetch = (url: string) => {

  const fetching = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
  }

  const [data, setData] = useState()

  return {
    data,
    fetching
  }
}
