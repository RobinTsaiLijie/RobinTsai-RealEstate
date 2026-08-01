import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: '🏠',
      title: 'Selling, Buying, Renting',
      description:
        'Full-service support for all your property transaction needs'
    },
    {
      number: '02',
      icon: '📅',
      title: 'Timeline Planning',
      description:
        'Allowing sufficient time to move to your new house and renovation. Avoid being homeless due to poor timeline planning'
    },
    {
      number: '03',
      icon: '🧮',
      title: 'Detailed Financial Calculation',
      description:
        'Understanding the total cash / CPF return after Sell / Buy. What is your budget to buy the next house?'
    },
    {
      number: '04',
      icon: '📊',
      title: 'Customised Home Report',
      description:
        'Personalized property analysis tailored to your specific needs and goals'
    },
    {
      number: '05',
      icon: '📈',
      title: 'Marketing Strategies',
      description:
        "Data-driven marketing approaches to maximize your property's visibility"
    },
    {
      number: '06',
      icon: '🏢',
      title: 'New Launch Analysis',
      description:
        'Expert evaluation of new developments and investment opportunities'
    },
    {
      number: '07',
      icon: '⚖️',
      title: 'Asset Strategy',
      description:
        'Upgrade and downgrade planning to optimize your property portfolio'
    },
    {
      number: '08',
      icon: '🤝',
      title: 'Complicated Cases',
      description:
        'Specialized handling of divorce and Death of kin property matters (Grant of Probate) (Letters of Administration)'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <h2>My Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-header">
              <div className="service-icon">
                {service.icon}
              </div>

              <div className="service-number">
                {service.number}
              </div>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;