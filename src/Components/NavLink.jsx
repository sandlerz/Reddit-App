import { NavLink as NavItem } from 'react-router-dom'

export default function NavLink({ icon, path, path2 = '1', children }) {
  return (
    <NavItem
      to={path}
      className={({ isActive }) => (isActive ? 'isActive' : 'navItem')}
      children={({ isActive }) =>
        isActive ? (
          <>
            <div className="navLinks__item__icon">
              <img src={icon} alt="" className="iconActive" />
            </div>
            {children}
          </>
        ) : (
          <>
            <div className="navLinks__item__icon">
              <img src={icon} alt="" />
            </div>
            {children}
          </>
        )
      }
    />
  )
}
