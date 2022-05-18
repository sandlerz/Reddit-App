import Parce from 'html-react-parser'
import { getTextToHTML } from '../Util/util'
import Avatar from '../assets/images/reddit-avatar.png'
import { timeDifference } from '../Util/util'
import topArrow from '../assets/images/top-arrow.svg'

export default function Comment({
  id,
  body_html,
  children,
  kind,
  handleClick,
  repliesComments,
  mapFunction,
  author,
  score,
  created_utc,
}) {
  return (
    <div className="comment">
      <div className="comment__user">
        <div className="comment__user__avatar">
          <img src={Avatar} alt="" />
        </div>
        <span className="comment__user__author">{author}</span>
        <span className="time">• {timeDifference(created_utc)}</span>
      </div>
      <div className="comment__body">
        <div>{Parce(getTextToHTML(body_html))}</div>
        <div className="comment__body__dashboard">
          <div className="comment__body__dashboard__score dashboard-border">
            <div className="comment__body__dashboard__score__img">
              <img src={topArrow} alt="" />
            </div>
            <span>{score.toLocaleString()} VotesUp</span>
          </div>
          {children && kind !== 'more' && (
            <div className="comment__body__dashboard__replies-btn dashboard-border">
              <div className="comment__body__dashboard__replies-btn__img">
                <img src={'icon'} alt="" />
              </div>
              <span
                className="comment__body__dashboard__replies-btn__btn"
                onClick={() => handleClick(id)}
              >
                Replies
              </span>
            </div>
          )}
        </div>

        {repliesComments[id] && (
          <div className="comment__body__replies-container">
            {mapFunction(children)}
          </div>
        )}
      </div>
    </div>
  )
}
