const menuItems = [
  'HOME PAGE',
  'REQUEST SERVICE',
  'Track Service',
  'VIEW BILLS',
  'HELP DESK',
  'MANAGE PROFILE',
]

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={isOpen ? 'sidebar open' : 'sidebar'} aria-hidden={!isOpen}>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {menuItems.map((item, index) => {
          const isActive = index === 0

          return (
            <button
              key={item}
              type="button"
              className={isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'}
            >
              <span>{item}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar