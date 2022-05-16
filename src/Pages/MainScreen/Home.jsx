import AllSubReddits from './AllSubReddits/AllSubReddits'
import Aside from './Aside/Aside'

export default function Home() {
  return (
    <div className="grid">
      <AllSubReddits />
      <Aside />
    </div>
  )
}
