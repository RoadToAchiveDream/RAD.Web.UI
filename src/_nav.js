import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilHome,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilTask,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Домашняя страница',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Трекер',
  },
  {
    component: CNavGroup,
    name: 'Задачи',
    to: '/tasks',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Выполненные задачи',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Невыполненные задачи',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Все задачи',
        to: '/tasks',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Аккаунт и настройки ',
    to: '/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
