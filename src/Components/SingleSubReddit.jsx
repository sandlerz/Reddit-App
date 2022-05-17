import topArrow from '../assets/images/top-arrow.svg'
import botArrow from '../assets/images/bot-arrow.svg'
import avatar from '../assets/images/reddit-avatar.png'
import Parce from 'html-react-parser'
import { timeDifference, getTextToHTML } from '../Util/util'

export default function SingleSubReddit({ data }) {
  const createdDate = new Date(data.created_utc * 1000)
  const currentDate = new Date()

  console.log(data)

  return (
    <section className="single-subreddit">
      <div className="single-subreddit__score-container">
        <div className="single-subreddit__score-container__arrow">
          <img src={topArrow} alt="" />
        </div>
        <span className="single-subreddit__score-container__score">
          {data.score}
        </span>
        <div className="single-subreddit__score-container__arrow">
          <img src={botArrow} alt="" />
        </div>
      </div>
      <div className="single-subreddit__img">
        <img src={data.url} alt="" />
      </div>
      <div className="single-subreddit__body-container">
        <h1 className="single-subreddit__body-container__tittle">
          {data.title}
        </h1>
        <div className="single-subreddit__body-container__selftext">
          {Parce(getTextToHTML(data.selftext_html))}
        </div>
        <div className="single-subreddit__body-container__author-container">
          <div className="single-subreddit__body-container__author-container__avatar">
            <img src={avatar} alt="" />
          </div>
          <span className="single-subreddit__body-container__author-container__reddit">
            {data.subreddit_name_prefixed}
          </span>
          <span className="single-subreddit__body-container__author-container__author">
            Posted by u/{data.author}
          </span>
          <span className="single-subreddit__body-container__author-container__time">
            • {timeDifference(currentDate, createdDate)}
          </span>
        </div>
      </div>
    </section>
  )
}
