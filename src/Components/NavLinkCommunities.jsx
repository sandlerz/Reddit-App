import { objImg } from '../Util/util'
import { NavLink as NavItem } from 'react-router-dom'

export default function NavCommunities({ data, index }) {
  const { communityName, icon, subscribers } = data
  return (
    <NavItem
      to={`/${communityName}`}
      style={{ textDecoration: 'none' }}
      children={({ isActive }) =>
        isActive ? (
          <>
            <div className="communities communities__isActive">
              <span className="communities__number">{index}</span>
              <div className="communities__img">
                <img
                  src={
                    icon === null
                      ? objImg.default
                      : icon === ''
                      ? objImg.default
                      : icon
                  }
                  alt=""
                />
              </div>
              <div className="communities__body">
                <span className="communities__body__name">{communityName}</span>
                <span className="communities__body__subscribers">
                  {Number(subscribers).toLocaleString()} subscribers
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="communities">
              <span className="communities__number">{index}</span>
              <div className="communities__img">
                <img
                  src={
                    icon === null
                      ? objImg.default
                      : icon === ''
                      ? objImg.default
                      : icon
                  }
                  alt=""
                />
              </div>
              <div className="communities__body">
                <span className="communities__body__name">{communityName}</span>
                <span className="communities__body__subscribers">
                  {Number(subscribers).toLocaleString()} subscribers
                </span>
              </div>
            </div>
          </>
        )
      }
    />
  )
}
