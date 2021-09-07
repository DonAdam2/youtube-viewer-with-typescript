import React, {useState, FC, ChangeEvent} from "react";
import {useDispatch} from "react-redux";
//actions
import {fetchYoutubeVideos} from "../store/app/actions/AppActions";

const SearchBar: FC = () => {
    const dispatch = useDispatch(),
        [term, setTerm] = useState('');

    const onInputChange = ({target: {value}}: ChangeEvent<HTMLInputElement> ) => {
        setTerm(value);
        dispatch(fetchYoutubeVideos(value));
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
