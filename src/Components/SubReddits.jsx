import topArrow from '../assets/images/top-arrow.svg'
import botArrow from '../assets/images/bot-arrow.svg'
import commentIcon from '../assets/images/comment-icon.svg'
import shareIcon from '../assets/images/share-icon.svg'
import expandIcon from '../assets/images/expand-icon.svg'
import avatar from '../assets/images/reddit-avatar.png'
import { objImg } from '../Util/util'
import { useNavigate } from 'react-router-dom'

export default function SubReddits({ data }) {
  const {
    author,
    comments,
    score,
    subRedditName,
    thumbnail,
    title,
    permalink,
  } = data
  const navigate = useNavigate()

  const handleNavigateToCommunity = () => {
    navigate(`/${subRedditName}`)
  }

  console.log(permalink)
  const handleOpenSubReddit = () => {
    navigate(`${permalink}`)
  }

  return (
    <div className="subReddit">
      <div className="subReddit__score-container">
        <div className="subReddit__score-container__arrow">
          <img src={topArrow} alt="" />
        </div>
        <span className="subReddit__score-container__score">
          {(score / 1000).toFixed(1)}K
        </span>
        <div className="subReddit__score-container__arrow">
          <img src={botArrow} alt="" />
        </div>
      </div>
      <div className="subReddit__thumbnail">
        <img
          src={thumbnail.startsWith('http') ? thumbnail : objImg[thumbnail]}
          alt=""
          onClick={handleOpenSubReddit}
        />
      </div>
      <div className="subReddit__body-container">
        <h1
          className="subReddit__body-container__title"
          onClick={handleOpenSubReddit}
        >
          {title}
        </h1>
        <div className="subReddit__body-container__author-container">
          <div className="subReddit__body-container__author-container__avatar">
            <img src={avatar} alt="" />
          </div>
          <span
            className="subReddit__body-container__author-container__reddit"
            onClick={handleNavigateToCommunity}
          >
            {subRedditName}
          </span>
          <span className="subReddit__body-container__author-container__author">
            Posted by u/{author}
          </span>
        </div>
        <div className="subReddit__body-container__dashboard">
          <div className="subReddit__body-container__dashboard__expand-icon">
            <img src={expandIcon} alt="" />
          </div>
          <div className="subReddit__body-container__dashboard__comments dashboard-border">
            <div className="subReddit__body-container__dashboard__icons">
              <img src={commentIcon} alt="" />
            </div>
            <span>{comments} Comments</span>
          </div>
          <div className="subReddit__body-container__dashboard__share dashboard-border">
            <div className="subReddit__body-container__dashboard__icons">
              <img src={shareIcon} alt="" />
            </div>
            <span>share</span>
          </div>
        </div>
      </div>
    </div>
  )
}
