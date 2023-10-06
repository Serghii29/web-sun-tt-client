import React from 'react';
import './ContactDetails.scss';

export const ContactDetails: React.FC = React.memo(() => (
  <div className="contacts">
    <p className="contacts__title">Head Office</p>

    <div className="contacts__item map">
      <img
        src="./icons/location-pin.svg"
        alt="icon location"
        className="contacts__icon"
      />
      <a
        href="https://maps.app.goo.gl/gNcEBNdozqzn6WgWA"
        target="_blank"
        rel="noreferrer"
      >
        4517 Washington Ave. Manchester,
        <br />
        Kentucky 39495
      </a>
    </div>

    <div className="contacts__item">
      <img
        src="./icons/email.svg"
        alt="icon email"
        className="contacts__icon"
      />
      <a href="mailto:darrell@mail.com" className="contacts__link">
        darrell@mail.com
      </a>
    </div>

    <div className="contacts__item">
      <img
        src="./icons/phone-call.svg"
        alt="icon phone"
        className="contacts__icon"
      />
      <a href="tel:(671) 555-0110">(671) 555-0110</a>
    </div>
  </div>
));
