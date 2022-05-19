import AllSubReddits from './AllSubReddits/AllSubReddits'
import Aside from './Aside/Aside'

export default function Home() {
  return (
    <main className="grid">
      <AllSubReddits />
      <Aside />
    </main>
  )
}
