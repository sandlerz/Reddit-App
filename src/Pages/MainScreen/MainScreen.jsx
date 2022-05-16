import { Outlet } from 'react-router-dom'
import Navbar from '../../Containers/Navbar'
import SearchBar from './SearchBar/SearchBar'
export default function MainScreen() {
  return (
    <div>
      <header>
        <SearchBar />
        <Navbar />
      </header>
      <Outlet />
    </div>
  )
}
