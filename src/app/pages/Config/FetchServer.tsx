import React, {useEffect, useState} from 'react'
import {CustomToast, Toast} from './CustomToast'
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
        });
  
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log('Data received:', data);
        } else {
          CustomToast('Failed to fetch data!', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        CustomToast('An error occurred while fetching configuration data!', 'error');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();  // Call the fetchData function immediately
  
  }, []);
  
  return (
    <div>
      <DropDownBox label='Server' name={option} value={option} data={data} />
      <DropDownBox label='Server POS' name={option} value={option} data={data} />

      {/* <div className='row mb-6'>
        <Toast />
        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server POS</label>

        <div className='col-lg-4 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            name='option'
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value=''>Select a server..</option>
            {data.map((elt) => (
              <option key={elt.ID} value={elt.ID}>
                {elt.name} : {elt.port}
              </option>
            ))}
          </select>
        </div>
        <div className='col-lg-4 fv-row'>
          <button className='btn btn-primary' onClick={fetchData}>
            Fetch
          </button>
        </div>
      </div>
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server POS</label>
        <div className='col-lg-4 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            name='option'
            value={option}
          >
            <option value=''>Select a server..</option>
          </select>
        </div>
        <div className='col-lg-4 fv-row'>
          <button className='btn btn-primary'>Select</button>
        </div>
      </div> */}
    </div>
  )
}

export default FetchServer
