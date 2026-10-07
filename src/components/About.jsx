import { useState } from 'react'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'

const points = ['Simple workflow', 'Real-time collaboration', 'Powerful insights']

export default function About() {
  const [failed, setFailed] = useState(false)

  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="image-frame">
              {failed ? (
                <div className="image-fallback">
                  <i className="bi bi-people-fill"></i>
                </div>
              ) : (
                <img
                  src={ABOUT_IMG}
                  alt="Team collaborating around a table"
                  className="img-fluid"
                  loading="lazy"
                  onError={() => setFailed(true)}
                />
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold nova-heading display-6 mb-3">Everything you need in one place</h2>
            <p className="text-secondary mb-4 nova-lead">
              Manage your work, collaborate with your team, and stay focused on what matters.
            </p>

            <ul className="list-unstyled mb-4">
              {points.map((p) => (
                <li className="d-flex align-items-center gap-3 mb-3 fw-medium" key={p}>
                  <span className="check-badge">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a href="#get-started" className="btn btn-outline-nova rounded-pill px-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
