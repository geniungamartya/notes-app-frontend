import React, { useState } from "react";

const NoteSearch = ({ searchNote }) => {
    const [query, setQuery] = useState('');

    const onQueryChangeEventHandler = (event) => {
        setQuery(event.target.value);
        searchNote(event.target.value);
    };

    return(
        <input 
            type="text" 
            placeholder="Search Notes .." 
            value={query} 
            onChange={onQueryChangeEventHandler} 
            className="min-w-96 px-4 py-3 mb-3 bg-transparent border border-gray-300 rounded"
        />
    )
};

export default NoteSearch;
