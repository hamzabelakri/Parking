import React, {useEffect, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Login } from './Login'
const CustomModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleShow()
  }, [])
  return (
    <div>
      <Modal centered show={show} backdrop="static" onHide={handleClose} >
        <Modal.Body>
          <Login closeModal={setShow}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CustomModal
