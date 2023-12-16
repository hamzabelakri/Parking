import React, {useState} from 'react'
import CarTable from '../Components/CarList/CarTable'

const CarListPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_1'
        onClick={openModal}
      >
        Launch demo modal
      </button>

      <div className='modal fade" tabIndex={-1}' id="kt_modal_1">
       
        <div className='modal-dialog modal-dialog-centered mw-900px'>
         
          <div className='modal-content'>
          <CarTable/>
          </div>
        
        </div>
       
      </div>
    </>
  )
}

export default CarListPage