import React, {useState, FC, ChangeEvent} from "react";
//interfaces
import { SearchBarInterface } from "../interfaces/SearchBarInterface";

const SearchBar: FC<SearchBarInterface> = ({onSearchTermChange}) => {
    const [term, setTerm] = useState('');

    const onInputChange = ({target: {value}}: ChangeEvent<HTMLInputElement> ) => {
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
