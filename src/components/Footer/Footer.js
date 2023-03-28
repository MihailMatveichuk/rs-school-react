import { LINKS_FOOTER } from '../../footer_link';
import { Component } from 'react';
import React from 'react';
import './Footer.scss';
export class Footer extends Component {
    render() {
        const { name: Mikhail, link: Mikhail_link, img: Mikhail_img } = LINKS_FOOTER[0];
        const { name: RS, link: RS_link, img: RS_img } = LINKS_FOOTER[1];
        return (React.createElement("div", { className: "footer" },
            React.createElement("div", { className: "links" },
                React.createElement("a", { href: Mikhail_link },
                    React.createElement("img", { src: Mikhail_img, className: "mike-icon", alt: Mikhail })),
                React.createElement("a", { href: RS_link },
                    React.createElement("img", { src: RS_img, className: "RS-logo", alt: RS }))),
            React.createElement("p", { className: "footer__copyright" }, "Designed in 2023")));
    }
}
