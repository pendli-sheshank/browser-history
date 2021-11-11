import './index.css'

const SearchHistory = props => {
  const {searchDetails, onDeleteItems} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onClickDelete = () => {
    onDeleteItems(id)
  }

  const imageUrl = 'https://assets.ccbp.in/frontend/react-js/delete-img.png'

  return (
    <li className="list-items">
      <div className="responsive-container">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="logo-content-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-container">
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={onClickDelete}
        >
          <img src={imageUrl} className="delete-icon" alt="delete" />
        </button>
      </div>
    </li>
  )
}

export default SearchHistory
