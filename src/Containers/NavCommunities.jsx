import { objImg } from '../Util/util'
import { Link } from 'react-router-dom'

export default function NavCommunities({ data, index }) {
  const { communityName, icon, subscribers } = data
  const regEx = /\/\w+/
  const nameParam = communityName.match(regEx)
  return (
    <div className="communities">
      <span className="communities__number">{index}</span>
      <div className="communities__img">
        <img
          src={
            icon === null ? objImg.default : icon === '' ? objImg.default : icon
          }
          alt=""
        />
      </div>
      <div className="communities__body">
        <Link to={`/r${nameParam[0]}`}>{communityName}</Link>
        {/* <span className="communities__body__name">{communityName}</span> */}
        <span className="communities__body__subscribers">
          {Number(subscribers).toLocaleString()} subscribers
        </span>
      </div>
    </div>
  )
}
