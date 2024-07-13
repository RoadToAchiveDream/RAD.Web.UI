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
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Пользователь</strong>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>Имя</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilText}></CIcon>
              </CInputGroupText>
              <CFormInput type="text" placeholder="Loading..." aria-label="" disabled readOnly />
            </CInputGroup>
            <CFormLabel>Фамилия</CFormLabel>
            <CInputGroup className="mb-3">
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
            <CInputGroup className="mb-3">
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
            <CInputGroup className="mb-3">
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
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Фото профиля</strong>
        </CCardHeader>
        <CCardBody className="d-flex flex-column align-items-center">
          <CCardImage 
            src={ReactImg} 
            className='m-1'
            style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%' }} 
          />
          <div className="mt-3 ">
            <CButton className="btn-primary m-1">Изменить</CButton>
            <CButton className="btn-danger m-1 text-white">Удалить</CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}

export default User
