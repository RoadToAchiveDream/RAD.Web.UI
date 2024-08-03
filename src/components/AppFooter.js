import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
        <a href="https://road-to-the-dream.uz" target="_blank" rel="noopener noreferrer">
          RAD.Web.UI
        </a>
        <span className="ms-1">&copy; 2024 Road to the Dream</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
