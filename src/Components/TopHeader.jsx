import RedditLogo from '../assets/images/reddit-avatar.png'
import SearchIcon from '../assets/images/search-icon.svg'
import Moon from '../assets/images/moon.svg'

export default function TopHeader() {
  return (
    <div className="headerTop">
      <button className="headerTop__redditLogo">
        <img src={RedditLogo} alt="logo" />
      </button>
      <button className="search">
        <div className="search__icon">
          <img src={SearchIcon} alt="" />
        </div>
        <input
          className="search__input"
          type="text"
          placeholder="Search for anything..."
        />
      </button>
      <button className="headerTop__darkMode">
        <img src={Moon} alt="moon" />
      </button>
    </div>
  )
}
