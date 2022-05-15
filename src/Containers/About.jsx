import github from '../assets/images/github-social.png'
import linkedin from '../assets/images/linkedin-social.png'
import reddit from '../assets/images/reddit-social.png'

export default function About() {
  return (
    <>
      <h2 className="aside__about__title">About</h2>
      <div className="aside__about__body">
        <div className="aside__about__body__item">
          <div className="aside__about__body__item__img">
            <img src={github} alt="" />
          </div>
          <a
            className="aside__about__body__item__text"
            href="https://github.com/sandlerz"
            target="_blank"
            rel="noreferrer"
          >
            @sandlerz
          </a>
        </div>
        <div className="aside__about__body__item">
          <div className="aside__about__body__item__img">
            <img src={linkedin} alt="" />
          </div>
          <a
            className="aside__about__body__item__text"
            href="https://www.linkedin.com/in/sebastian-mesa-3a4b07232/"
            target="_blank"
            rel="noreferrer"
          >
            Sebastian Mesa
          </a>
        </div>
        <div className="aside__about__body__item">
          <div className="aside__about__body__item__img">
            <img src={reddit} alt="" />
          </div>
          <a
            className="aside__about__body__item__text"
            href="https://www.reddit.com/"
            target="_blank"
            rel="noreferrer"
          >
            Reddit
          </a>
        </div>
      </div>
    </>
  )
}
