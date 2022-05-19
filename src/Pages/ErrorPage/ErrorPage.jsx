import SearchBar from '../MainScreen/SearchBar/SearchBar'
import Navbar from '../../Containers/Navbar'
import Error from '../../Components/Error'

export default function ErrorPage() {
  return (
    <div>
      <header>
        <SearchBar />
        <Navbar />
      </header>
      <Error />
    </div>
  )
}
