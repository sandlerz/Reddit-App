import { useNavigate } from 'react-router-dom'

export default function Error() {
  const navigate = useNavigate()
  const handleBack = () => navigate('/')
  return (
    <div className="error-page">
      <h1 className="error-page__text">Upps.. Looks like you're lose!</h1>
      <button className="error-page__btn" onClick={handleBack}>
        Back Home
      </button>
    </div>
  )
}
