import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import AdminLoginForm from '../Auth/AdminLoginForm';
import UserLoginForm from '../Auth/UserLoginForm';


const AuthModal: React.FC = () => {
  const [show, setShow] = useState(false)
  const [currentComponent, setCurrentComponent] = useState('login');
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
      <Modal centered show={show} backdrop="static" onHide={handleClose} keyboard={false} >
      <Modal.Body>
          {currentComponent === 'login' ? (
            <UserLoginForm closeModal={setShow}  openAdminAuth={openAdminAuth}/>
          ) : (
            <AdminLoginForm closeModal={setShow} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AuthModal
