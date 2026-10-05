const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={onToggleSidebar}
        >
          ☰
        </button>

        <h2 className="header-title">Customer Care 360</h2>
      </div>

      <div className="header-right">
        <button className="profile-button" type="button" aria-label="User profile">
          CC
        </button>
      </div>
    </header>
  )
}

export default Header
