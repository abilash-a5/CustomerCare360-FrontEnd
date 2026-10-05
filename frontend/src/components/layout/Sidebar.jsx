import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'HOME PAGE', path: '/' },
  { label: 'REQUEST SERVICE', path: '/service' },
  { label: 'Track Service', path: '/track-service' },
  { label: 'VIEW BILLS', path: '/bills' },
  { label: 'HELP DESK', path: '/help' },
  { label: 'MANAGE PROFILE', path: '/profile' },
]

const Sidebar = ({ isOpen }) => {
  const location = useLocation()

  return (
    <aside className={isOpen ? 'sidebar open' : 'sidebar'} aria-hidden={!isOpen}>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {menuItems.map(({ label, path }) => {
          const isActive = location.pathname === path

          return (
            <Link
              key={label}
              to={path}
              className={isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'}
            >
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar