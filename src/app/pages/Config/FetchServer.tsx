import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

const FetchServer = ({setConfigOption}) => {
  const [selectedZr, setselectedZr] = useState(null)
  const [selectedPos, setselectedPos] = useState(null)

  const {data} = useSelector((state: any) => state.ServerReducer)

  const onZrSelection = async (event) => {
    setselectedZr(event.target.value)
  }

  const onPosSelection = async (event) => {
    setselectedPos(event.target.value);
    setConfigOption({ selectedZr, selectedPos: event.target.value });
  }
  
  const ZrOptions = (data) => {
    return (
      <>
        {data?.map((zr) => {
          return (
            <option key={zr.id} value={zr.id}>
              {zr.name}
            </option>
          )
        })}
      </>
    )
  }

  const PosOptions = (data, id) => {
    console.table(data)
    let posOptions = []

    {
      data?.forEach((zr) => {
        if (zr.id == id) {
          console.log(zr)
          posOptions = zr.pos.map((pos) => {
            return (
              <option key={pos.id} value={pos.id}>
                {pos.name}
              </option>
            )
          })
        }
      })
    }
    console.log(posOptions)
    return posOptions
  }

  return (
    <div>
      <div className='row mb-6'>
        <label className='col-lg-2 col-form-label required fw-bold fs-6'></label>
        <div className='col-lg-4 fv-row'>
          <select className='form-select form-select-solid form-select-lg' onChange={onZrSelection}>
            <option>Select ZR</option>
            {ZrOptions(data)}
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
