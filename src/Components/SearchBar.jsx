import RedditLogo from '../assets/images/reddit-avatar.png'
import SearchIcon from '../assets/images/search-icon.svg'
import Moon from '../assets/images/moon.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TopHeader() {
  const [textInput, setTextInput] = useState('')
  const navigate = useNavigate()

  const handleEnter = event => {
    const { key } = event
    if (key === 'Enter') {
      navigate(`/search/${textInput}`)
      setTextInput('')
    }
  }

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
          onChange={event => setTextInput(event.target.value)}
          value={textInput}
          onKeyDown={handleEnter}
        />
      </button>
      <button className="headerTop__darkMode">
        <img src={Moon} alt="moon" />
      </button>
    </div>
  )
}
