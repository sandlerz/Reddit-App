import RedditLogo from '../../../assets/images/reddit-avatar.png'
import SearchIcon from '../../../assets/images/search-icon.svg'
import Moon from '../../../assets/images/moon.svg'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllSubReddits } from '../AllSubReddits/AllSubRedditsSlice'
import { getSearch } from './SearchBarSlice'

export default function TopHeader() {
  const [textInput, setTextInput] = useState('')
  const { subreddits, term, community } = useParams()
  const allSubReddits = useSelector(selectAllSubReddits)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleEnter = event => {
    const { key } = event
    if (key === 'Enter') {
      navigate(`/search/${textInput}`)
      setTextInput('')
    }
  }

  const handleClick = () => {
    navigate(`/search/${textInput}`)
    setTextInput('')
  }

  const handleLogoNavigate = () => {
    navigate('/')
  }

  useEffect(() => {
    if (allSubReddits[term] === undefined) {
      dispatch(getSearch({ term: term, type: 'link' }))
      dispatch(getSearch({ term: term, type: 'sr' }))
    }
  }, [subreddits, term, community])

  return (
    <div className="headerTop">
      <button className="headerTop__redditLogo" onClick={handleLogoNavigate}>
        <img src={RedditLogo} alt="logo" />
      </button>
      <button className="search">
        <div className="search__icon" onClick={handleClick}>
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
