import React, {useEffect, useState} from 'react'
import {CustomToast, Toast} from './CustomToast'
import SelectServer from './SelectServer'
import DropDownBox from './DropDownBox'
import {useSelector} from 'react-redux'

const FetchServer = () => {
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedServer, setSelectedServer] = useState(null);

  const {data} = useSelector((state: any) => state.ServerReducer)
  //console.log(data)
  

  return (
    <div>
      <DropDownBox
        label='Server POS'
        data={data}
        name='option'
        value={option}
        setOption={setOption}
      />
      <SelectServer />
    </div>
  )
}

export default FetchServer
