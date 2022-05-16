import Aside from './Aside/Aside'
import SingleSubReddit from './SingleSubReddit/SingleSubReddit'

export default function SubReddit() {
  return (
    <div className="grid">
      <SingleSubReddit />
      <Aside />
    </div>
  )
}
