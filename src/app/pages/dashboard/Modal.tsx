import React, {useEffect, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {Login} from '../../modules/auth/components/Login'
const CustomModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleShow()
  }, [])
  return (
    <div>
      <Modal centered show={show}  onHide={handleClose} >
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CustomModal
