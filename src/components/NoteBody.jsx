import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteBody({ notes, querySearch, addNote, onArchive, onDelete }) {
    // Filter notes based on their archived status and search query
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(querySearch.toLowerCase().trim()))

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-3">
            <NoteInput addNote={addNote} />
            <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
            <NoteList notes={activeNotes} onArchive={onArchive} onDelete={onDelete} />
            <h2 className="text-2xl font-bold mb-4">Archive</h2>
            <NoteList notes={archivedNotes} onArchive={onArchive} onDelete={onDelete} />
        </div>
    );    
};

export default NoteBody;
