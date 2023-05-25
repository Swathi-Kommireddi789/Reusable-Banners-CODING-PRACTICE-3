// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannercardList} = props
  const {id, headerText, description, className} = bannercardList

  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
