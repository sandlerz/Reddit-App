import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/MainScreen/Home/Home'
import MainScreen from '../Pages/MainScreen/MainScreen'
import SubReddit from '../Pages/MainScreen/SubReddit/SubReddit'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route index element={<Home />} />
        <Route path=":popular" element={<Home />} />
        <Route path="/:search/:term" element={<Home />} />
      </Route>
    </Routes>
  )
}
