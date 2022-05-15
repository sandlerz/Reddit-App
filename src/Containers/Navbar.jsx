import bestIcon from '../assets/images/best.svg'
import hotIcon from '../assets/images/hot.svg'
import newIcon from '../assets/images/new.svg'
import topIcon from '../assets/images/top.svg'
import NavLink from '../Components/NavLink'

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="navLinks">
          <li className="navLinks__item">
            <NavLink icon={bestIcon} path="/" path2="best">
              Best
            </NavLink>
          </li>
          <li className="navLinks__item">
            <NavLink icon={hotIcon} path="/top">
              top
            </NavLink>
          </li>
          <li className="navLinks__item">
            <NavLink icon={newIcon} path="/new">
              New
            </NavLink>
          </li>
          <li className="navLinks__item">
            <NavLink icon={topIcon} path="/rising">
              Rising
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
