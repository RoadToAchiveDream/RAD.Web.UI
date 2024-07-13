import React from 'react'
import {
  CCardHeader,
  CCardBody,
  CCard,
  CFormInput,
  CFormLabel,
  CInputGroupText,
  CInputGroup,
  CForm,
  CCardGroup,
  CCardImage,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPhone, cilText } from '@coreui/icons'
import ReactImg from 'src/assets/images/avatars/9.jpg'

const User = () => {
  return (
    <CCardGroup>
      <div className='col-lg-4 m-1 mb-4'>
      <CCard>
        <CCardHeader>
          <strong>Пользователь</strong>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>Имя</CFormLabel>
            <CInputGroup className="mb-1">
              <CInputGroupText>
                <CIcon icon={cilText}></CIcon>
              </CInputGroupText>
              <CFormInput type="text" placeholder="Loading..." aria-label="" disabled readOnly />
            </CInputGroup>
            <CFormLabel>Фамилия</CFormLabel>
            <CInputGroup className="mb-1">
              <CInputGroupText>
                <CIcon icon={cilText}></CIcon>
              </CInputGroupText>
              <CFormInput
                type="text"
                placeholder="Loading..."
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </CInputGroup>
            <CFormLabel>Адрес электронный почты</CFormLabel>
            <CInputGroup className="mb-1  ">
              <CInputGroupText>@</CInputGroupText>
              <CFormInput
                type="text"
                placeholder="Loading..."
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </CInputGroup>
            <CFormLabel>Номер телефона</CFormLabel>
            <CInputGroup className="mb-1">
              <CInputGroupText>
                <CIcon icon={cilPhone}></CIcon>
              </CInputGroupText>
              <CFormInput
                type="text"
                placeholder="Loading..."
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </CInputGroup>
          </CForm>
        </CCardBody>
      </CCard>
      </div>
      <div className='col-lg-3 m-1 mb-4'>
      <CCard>
        <CCardHeader>
          <strong>Фото профиля</strong>
        </CCardHeader>
        <CCardBody className="d-flex flex-column align-items-center">
          <CCardImage 
            src={ReactImg} 
            className='p-3 m-3'
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} 
          />
          <div className="mt-3 ">
            <CButton className="btn-primary m-1">Изменить</CButton>
            <CButton className="btn-danger m-1 text-white">Удалить</CButton>
          </div>
        </CCardBody>
      </CCard>
      </div>
    </CCardGroup>
  )
}

export default User
