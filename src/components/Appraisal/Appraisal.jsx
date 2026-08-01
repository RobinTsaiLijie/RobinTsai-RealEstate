import React from 'react';
import './Appraisal.css';

const Appraisal = () => {
  const selfies = [
    'selfie1.jpg',
    'selfie2.jpg',
    'selfie3.jpg',
    'Whatsapp5.jpg',
    'selfie4.jpg',
    'selfie5.jpg',
    'selfie6.jpg'
  ];

  const whatsappImages = [
    'whatsapp1.jpg',
    'whatsapp2.jpg',
    'whatsapp3.jpg',
    'whatsapp4.jpg'
  ];

  const testimonials = [
    `We are second timer, and we tried to apply for 5-room BTO many times but were all unsuccessful. Met up with Robin and he gave us alternative advice and solution to our growing family needs. We managed to upgrade from a 4 room to 5 room smoothly and most importantly, it is within budget and the location that we wanted.

Both my husband and my work schedule are very packed, and Robin ensured that our time are not compromised`,

    `Robin is very friendly and cheerful every time he met us... Ensuring our whole downsizing journey being very smooth without us worrying about what is going to happen next. Robin also listened to all our concerns and preferences for our new house and advice us accordingly. Extra plus points for Robin as he replied to our messages very quickly and efficiently throughout the whole process.`
  ];

  return (
    <section
      id="appraisal"
      className="section appraisal-section"
    >
      <h2>Appraisal &amp; Client Satisfaction</h2>

      <p className="permission-note">
        *Permission granted before uploading on platform
      </p>

      <div className="feedback-container">
        <div className="selfies-column">
          <h3>Client Satisfaction</h3>

          <div className="carousel-scene image-carousel-scene">
            <div
              className="carousel-ring selfie-ring"
              style={{
                '--carousel-count': selfies.length
              }}
            >
              {selfies.map((selfie, index) => (
                <div
                  key={selfie}
                  className="carousel-panel image-panel"
                  style={{
                    '--panel-index': index
                  }}
                >
                  <div className="panel-frame">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${selfie}`}
                      alt={`Client Satisfaction ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-base">
              <span />
            </div>
          </div>
        </div>

        <div className="whatsapp-column">
          <h3>WhatsApp Feedback</h3>

          <div className="carousel-scene image-carousel-scene">
            <div
              className="carousel-ring whatsapp-ring"
              style={{
                '--carousel-count': whatsappImages.length
              }}
            >
              {whatsappImages.map((whatsapp, index) => (
                <div
                  key={whatsapp}
                  className="carousel-panel image-panel"
                  style={{
                    '--panel-index': index
                  }}
                >
                  <div className="panel-frame">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${whatsapp}`}
                      alt={`WhatsApp Feedback ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-base">
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="comments-section">
        <h3>Client Testimonials</h3>

        <div className="carousel-scene testimonial-scene">
          <div
            className="carousel-ring testimonial-ring"
            style={{
              '--carousel-count': testimonials.length
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="carousel-panel testimonial-panel"
                style={{
                  '--panel-index': index
                }}
              >
                <div className="comment-card">
                  <p>{testimonial}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-base testimonial-base">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appraisal;