import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Login } from '../Auth/LoginForm'
import { AdminAuth } from '../Auth/AdminAuth'
const LoginModal = () => {
  const [show, setShow] = useState(false)
  const [currentComponent, setCurrentComponent] = useState('login'); // State to determine which component to render

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const openAdminAuth = () => {
    setCurrentComponent('adminAuth');
  };
  useEffect(() => {
    handleShow()
  }, [])
  return (
    <div>
      <Modal centered show={show} backdrop="static" onHide={handleClose} >
      <Modal.Body>
          {currentComponent === 'login' ? (
            <Login closeModal={setShow}  openAdminAuth={openAdminAuth}/>
          ) : (
            <AdminAuth closeModal={setShow} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default LoginModal
