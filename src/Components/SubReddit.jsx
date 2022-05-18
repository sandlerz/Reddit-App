import topArrow from '../assets/images/top-arrow.svg'
import botArrow from '../assets/images/bot-arrow.svg'
import avatar from '../assets/images/reddit-avatar.png'
import Parce from 'html-react-parser'
import { timeDifference, getTextToHTML, objImg } from '../Util/util'

export default function SubReddit({ data }) {
  const createdDate = new Date(data.created_utc * 1000)
  const currentDate = new Date()

  let img
  const regExImg = /\.jpg$/
  if (
    data.thumbnail === 'self' ||
    data.thumbnail === 'default' ||
    data.thumbnail === 'nsfw'
  ) {
    img = objImg[data.thumbnail]
  } else if (regExImg.test(data.url)) {
    img = data.url
  } else if (data.thumbnail) {
    img = data.thumbnail
  } else {
    img = null
  }

  return (
    <section className="single-subreddit">
      <div className="single-subreddit__top">
        <div className="single-subreddit__top__score-container">
          <div className="single-subreddit__top__score-container__arrow">
            <img src={topArrow} alt="" />
          </div>
          <span className="single-subreddit__top__score-container__score">
            {data.score.toLocaleString()}
          </span>
          <div className="single-subreddit__top__score-container__arrow">
            <img src={botArrow} alt="" />
          </div>
        </div>
        {img && (
          <div className="single-subreddit__top__img">
            <img src={img} alt="" />
          </div>
        )}
        <div className="single-subreddit__top__body-container">
          <h1 className="single-subreddit__top__body-container__tittle">
            {data.title}
          </h1>

          <div className="single-subreddit__top__body-container__author-container">
            <div className="single-subreddit__top__body-container__author-container__avatar">
              <img src={avatar} alt="" />
            </div>
            <span className="single-subreddit__top__body-container__author-container__reddit">
              {data.subreddit_name_prefixed}
            </span>
            <span className="single-subreddit__top__body-container__author-container__author">
              Posted by u/{data.author}
            </span>
            <span className="single-subreddit__top__body-container__author-container__time">
              • {timeDifference(currentDate, createdDate)}
            </span>
          </div>
        </div>
      </div>
      {data.selftext_html && (
        <div className="single-subreddit__bottom">
          {Parce(getTextToHTML(data.selftext_html))}
        </div>
      )}
    </section>
  )
}
