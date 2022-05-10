import { Outlet } from 'react-router-dom'
import Navbar from '../../Container/Navbar'

export default function MainScreen () {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
