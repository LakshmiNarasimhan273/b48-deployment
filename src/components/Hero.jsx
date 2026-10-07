import { useState } from 'react'

const HERO_IMG =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'

export default function Hero() {
  const [failed, setFailed] = useState(false)

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 fw-bold nova-heading mb-4">
              Build better.
              <br />
              Move faster.
            </h1>
            <p className="lead text-secondary mb-4 mx-auto mx-lg-0 nova-lead">
              A simple platform that helps teams work smarter and achieve more.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a href="#get-started" className="btn btn-nova btn-lg rounded-pill px-5">
                Get Started
              </a>
              <a href="#about" className="btn btn-outline-nova btn-lg rounded-pill px-5">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-frame">
              {failed ? (
                <div className="image-fallback">
                  <i className="bi bi-bar-chart-line-fill"></i>
                </div>
              ) : (
                <img
                  src={HERO_IMG}
                  alt="Analytics dashboard on a laptop screen"
                  className="img-fluid"
                  onError={() => setFailed(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
