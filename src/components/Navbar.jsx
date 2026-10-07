const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nova-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#home">
          <span className="nova-logo">N</span>
          Nova
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#novaNav"
          aria-controls="novaNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="novaNav">
          <ul className="navbar-nav mx-lg-auto mb-3 mb-lg-0 gap-lg-2">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link px-lg-3" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2 pb-3 pb-lg-0">
            <a href="#login" className="btn btn-link nova-link-btn text-decoration-none fw-semibold">
              Login
            </a>
            <a href="#get-started" className="btn btn-nova rounded-pill px-4">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
