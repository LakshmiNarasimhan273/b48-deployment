const features = [
  {
    icon: 'bi-graph-up-arrow',
    title: 'Smart Analytics',
    text: 'Get clear insights into your business.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Team Collaboration',
    text: 'Work together with your team seamlessly.',
  },
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Easy to Use',
    text: 'Simple tools designed for everyone.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-pad bg-soft">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold nova-heading display-6">Features</h2>
          <p className="text-secondary mb-0">Everything your team needs, nothing it doesn't.</p>
        </div>

        <div className="row g-4">
          {features.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.title}>
              <div className="card feature-card h-100 border-0 p-2 p-lg-3">
                <div className="card-body">
                  <div className="icon-box mb-4">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h3 className="h5 fw-bold nova-heading">{f.title}</h3>
                  <p className="text-secondary mb-0">{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
