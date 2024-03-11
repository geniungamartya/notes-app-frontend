import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ searchNote }) {
    return(
        <div className="flex items-center justify-center px-4 py-2 border-b border-gray-300">
            <h1 className="flex-1 text-4xl font-bold">Notes</h1>
            <NoteSearch searchNote={searchNote} />
        </div>
    );
};

export default NoteHeader;
