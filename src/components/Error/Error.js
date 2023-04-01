import React from 'react';
import img from './error.gif';
import './Error.scss';
const Error = () => {
    return (React.createElement("div", { className: "error" },
        React.createElement("img", { src: img, alt: "img" }),
        React.createElement("h2", null, "Error 404 (Page not found)")));
};
export default Error;
