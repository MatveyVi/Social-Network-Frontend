import React from 'react'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const GoBack = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
  return (
    <div
      onClick={handleGoBack}
      className='text-default-500 flex items-center gap-2 mb-5 cursor-pointer px-2 py-2 bg-default-50 rounded-lg w-max'>
        <FaRegArrowAltCircleLeft />
        Назад
    </div>
  )
}
