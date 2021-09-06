import React, {useState} from "react";

const SearchBar = ({onSearchTermChange}) => {
    const [term, setTerm] = useState('');

    const onInputChange = ({target: {value}}) => {
        setTerm(value);
        onSearchTermChange(value);
    }

    return (
        <div className="search-bar">
            <input
                value={term}
                onChange={onInputChange}
            />
        </div>
    );
}

export default SearchBar;
