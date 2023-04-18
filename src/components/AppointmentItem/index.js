import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, date, isStarred, title} = appointmentDetails

  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-items">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="star-btn"
          type="button"
          data-testid="star"
          onClick={onClickStar}
        >
          <img src={starImageUrl} alt="star" className="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
