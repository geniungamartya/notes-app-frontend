import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onArchive, onDelete}) {

    function renderNoteItem(note) {
        return (
            <NoteItem
                key={note.id}
                date={note.createdAt}
                note={note.body}
                onArchive={onArchive}
                onDelete={onDelete}
                {...note}
            />
        );
    };

    // Check if there are any notes
    const isEmpty = notes.length === 0;
    
    if (isEmpty) {
        return <p className="text-center text-gray-300">Tidak ada catatan</p>
    } else {
        return <div className="grid grid-cols-4 gap-4 mb-8">{notes.map(renderNoteItem)}</div>
    };
};

export default NoteList;
