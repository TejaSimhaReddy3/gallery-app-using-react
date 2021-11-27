// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const tnClassName = isActive ? 'thumbnail-active' : 'notActive'

  const onClickButton = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="list-items">
      <button className="button" type="button" onClick={onClickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={tnClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
