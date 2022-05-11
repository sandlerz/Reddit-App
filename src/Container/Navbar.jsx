import TopHeader from '../Components/TopHeader'
import bestIcon from '../assets/images/best.svg'
import hotIcon from '../assets/images/hot.svg'
import newIcon from '../assets/images/new.svg'
import topIcon from '../assets/images/top.svg'
import NavLink from '../Components/NavLink'

export default function Navbar() {
  return (
    <header>
      <TopHeader />
      <nav>
        <ul className="navLinks">
          <li className="navLinks__item">
            <NavLink icon={bestIcon} path="/">
              Best
            </NavLink>
          </li>
          <li className="navLinks__item">
            <NavLink icon={hotIcon} path="/hot">
              top
            </NavLink>
          </li>
          <li className="navLinks__item">
            <NavLink icon={newIcon} path="/new">
              New
            </NavLink>
          </li>
          <li className="navLinks__item">
            <NavLink icon={topIcon} path="/top">
              Rising
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
