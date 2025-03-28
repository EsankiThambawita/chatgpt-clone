import { Outlet } from 'react-router'
import './dashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'

const dashboardLayout = () => {

  const {userId} = useAuth()

  return (
    <div className='dashboardLayout'>
        <div className="menu">MENU</div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default dashboardLayout