import React, { useState } from 'react';
import './Search.scss';
const Search = (props) => {
    const [term, setTerm] = useState('');
    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    };
    return (React.createElement("input", { type: "text", className: "search form-control search-input danger", placeholder: "Search...", value: props.value || term, onChange: onUpdateSearch }));
};
export default Search;
