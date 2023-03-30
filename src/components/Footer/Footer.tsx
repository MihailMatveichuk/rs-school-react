import { LINKS_FOOTER } from '../../footer_link';
import React from 'react';
import './Footer.scss';

export const Footer = () => {
  const { name: Mikhail, link: Mikhail_link, img: Mikhail_img } = LINKS_FOOTER[0];
  const { name: RS, link: RS_link, img: RS_img } = LINKS_FOOTER[1];
  return (
    <div className="footer">
      <div className="links">
        <a href={Mikhail_link}>
          <img src={Mikhail_img} className="mike-icon" alt={Mikhail} />
        </a>
        <a href={RS_link}>
          <img src={RS_img} className="RS-logo" alt={RS} />
        </a>
      </div>

      <p className="footer__copyright">Designed in 2023</p>
    </div>
  );
};
