import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/MainScreen/Home'
import MainScreen from '../Pages/MainScreen/MainScreen'
import SubReddit from '../Pages/MainScreen/SubReddit/SubReddit'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route index element={<Home />} />
        <Route path=":subreddits" element={<Home />} />
        <Route path="/search/:term" element={<Home />} />
        <Route path="/r/:community" element={<Home />} />
        <Route path="/r/:community/comments/:id/:title" element={<Home />} />
      </Route>
    </Routes>
  )
}
