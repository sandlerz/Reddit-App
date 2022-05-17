import Aside from './Aside/Aside'
import Comments from './SingleSubReddit/SingleSubReddit'

export default function SubReddit() {
  return (
    <div className="grid">
      <Comments />
      <Aside />
    </div>
  )
}
