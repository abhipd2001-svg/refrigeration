const ServiceArea = () => {
  const nearbyAreas = [
    'Firozabad',
    'Mathura',
    'Hathras',
    'Mainpuri',
    'Etawah',
    'Kasganj',
    'Etah',
    'Dholpur, Rajasthan',
    'Bharatpur, Rajasthan',
    'Aligarh',
  ];

  return (
    <section id="service-area" className="section-block" aria-labelledby="service-area-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Service Area</span>
          <h2 id="service-area-title">AC Service Coverage in and Around Agra</h2>
        </div>

        <div className="service-area-card">
          <div>
            <p className="service-location">Main service location: Agra, Uttar Pradesh</p>
            <p className="service-coverage">
              Service support is available in Agra and surrounding areas within approximately 100 km.
            </p>
            <h3 className="service-area-heading">Nearby service areas</h3>
            <ul className="service-area-list">
              {nearbyAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div className="service-note">
            <strong>Note:</strong> Service requests beyond the standard 100 km service area may be subject to
            additional charges.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
