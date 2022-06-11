import React, { useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'


const Content = () => {


  const fetching = async () => {
    const request = await fetch("http://localhost:8080/scrap")
    const response = await request.json()

    console.log(response);
  }

  useEffect(() => {
    fetching()
  }, [])


  const suc = [
    { sucursal: "Escorza", tickets: [] },
    { sucursal: "Revolucion", tickets: [] },
    { sucursal: "Tlajomulco", tickets: [] }
  ]
  return (
    <div className='grid grid-cols-3'>
      {
        suc.map((data) => (
          <div
            className='flex flex-col'
            key={data.sucursal}
          >
            <p className='text-center'>
              {data.sucursal}
            </p>

            <span className='text-center'>{data.tickets.length}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Content