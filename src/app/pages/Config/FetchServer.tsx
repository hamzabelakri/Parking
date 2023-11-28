import React, {useEffect, useState} from 'react'
import {CustomToast, Toast} from './CustomToast'
import SelectServer from './SelectServer'
import DropDownBox from './DropDownBox'

const FetchServer = () => {
  const [option, setOption] = useState('')
  const [data, setData] = useState<ConfigData[]>([])
  const [loading, setLoading] = useState(false)

  interface ConfigData {
    ID: number
    name: string
    port: number
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/config', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const data = await response.json()
          setData(data)
          console.log('Data received:', data)
        } else {
          CustomToast('Failed to fetch data!', 'error')
        }
      } catch (error) {
        console.error('Error:', error)
        CustomToast('An error occurred while fetching configuration data!', 'error')
      } finally {
        setLoading(false)
      }
    }

    fetchData() // Call the fetchData function immediately
  }, [])

  return (
    <div>
      <DropDownBox label='Server POS' data={data} name='option' 
      value={option} setOption={setOption}/>
      <SelectServer data={data} />
    </div>
  )
}

export default FetchServer