import './index.css'

const TabItem = props => {
  const {isActiveTab, onTabClicked, tabDetails} = props
  const {displayText, tabId} = tabDetails

  const btnClicked = () => {
    onTabClicked(tabId)
  }

  const addStyle = isActiveTab ? 'addStyle' : ''

  return (
    <li className="list">
      <button
        className={`tab-btn ${addStyle}`}
        type="button"
        onClick={btnClicked}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
