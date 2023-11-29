import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedServer} from '../../../Redux/Server/ServerAction'

const FetchServer = ({setConfigOption}) => {
  const dispatch = useDispatch()
  const [selectedZr, setselectedZr] = useState(null)
  const [selectedPos, setselectedPos] = useState(null)

  const {data, selectedServer} = useSelector((state: any) => state.ServerReducer)
  console.log(selectedServer)
  const filteredData = selectedServer ? data.filter((item) => item.id === selectedServer) : []
  console.log(filteredData)

  const onZrSelection = async (event) => {
    const selectedId = event.target.value
    setselectedZr(selectedId)
    dispatch(setSelectedServer(selectedId))
  }

  const onPosSelection = async (event) => {
    setselectedPos(event.target.value)
    setConfigOption({selectedZr, selectedPos: event.target.value})
  }

  const ZrOptions = (data) => {
    return (
      <>
        {data?.map((zr) => (
          <option key={zr.id} value={zr.id}>
            {zr.name}
          </option>
        ))}
      </>
    )
  }

  const PosOptions = (data, selectedServer) => {
    //console.table(data)
    let posOptions = []

    {
      data?.forEach((zr) => {
        if (zr.id == selectedServer) {
          // console.log(zr)
          posOptions = zr.pos.map((pos) => (
            <option key={pos.id} value={pos.id}>
              {pos.name}
            </option>
          ))
        }
      })
    }
    // console.log(posOptions)
    return posOptions
  }

  return (
    <div>
      <div className='row mb-6'>
        <label className='col-lg-2 col-form-label required fw-bold fs-6'></label>
        <div className='col-lg-4 fv-row'>
          <select className='form-select form-select-solid form-select-lg' onChange={onZrSelection}>
            <option>Select ZR</option>
            {data?.map((zr) => (
              <option key={zr.id} value={zr.id}>
                {zr.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='row mb-6'>
        <label className='col-lg-2 col-form-label required fw-bold fs-6'></label>
        <div className='col-lg-4 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            onChange={onPosSelection}
          >
            <option>SelectPos</option>
            {PosOptions(data, selectedZr)}
          </select>
        </div>
      </div>
    </div>
  )
}

export default FetchServer
