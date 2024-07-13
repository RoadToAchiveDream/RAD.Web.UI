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
  CCardImage,
  CButton,
  CRow,
  CCol,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPen, cilPencil, cilPhone, cilRecycle, cilReload, cilText } from '@coreui/icons'
import ReactImg from 'src/assets/images/avatars/7.jpg'

const User = () => {
  return (
    <>
      <CCard className=" mb-4">
        <CCardHeader>Данные пользователя</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol lg="6" className="mb-4">
              <CForm>
                <CFormLabel>Имя</CFormLabel>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilText}></CIcon>
                  </CInputGroupText>
                  <CFormInput
                    type="text"
                    placeholder="Loading..."
                    aria-label=""
                    disabled
                    readOnly
                  />
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
                <div className="d-flex mt-4">
                  <CButton className="btn-primary">Изменить Данные</CButton>
                </div>
              </CForm>
            </CCol>
            <CCol className="mb-4 d-flex flex-column align-items-center">
              <CCardImage
                src={ReactImg}
                className="mb-3 p-4"
                style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%' }}
              />
              <div className="d-flex">
                <CButton className="btn-primary m-1">
                  <CIcon icon={cilPencil}></CIcon>
                </CButton>
                <CButton className="btn-danger m-1 text-white">Удалить</CButton>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Управление аккаунтом</CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <div className="col-auto">
              <CCardTitle>Если вам нужно выйти из платформы</CCardTitle>
              <CCardText>
                <span className="text-warning">
                  Пожалуйста, убедитесь, что перед выходом из системы выполнены все необходимые
                  действия. Любые несохраненные данные могут быть утеряны. После выхода вам
                  потребуется повторно ввести свои учетные данные для доступа к системе.
                </span>
              </CCardText>
            </div>
            <div className="col-auto">
              <CButton color="warning" type="submit" className="mb-3 text-white">
                Выход
              </CButton>
            </div>
            <div className="col-auto">
              <CCardTitle>Если вам нужно удалить аккаунт</CCardTitle>
              <CCardText>
                <span className="text-warning">Будьте внимательны: </span>
                <span className="text-danger">
                  Удаление аккаунта является необратимым процессом. После удаления все ваши данные
                  будут утеряны навсегда и восстановить аккаунт будет невозможно!
                </span>
              </CCardText>
            </div>
            <div className="col-auto">
              <CButton color="danger" type="submit" className="mb-3 text-white">
                Удалить аккаунт
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default User
