import React, { useState } from "react";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils";

function NoteApp() {
    const [notes, setNotes] = useState(getInitialData());
    const [querySearch, setQuerySearch] = useState('');

    const onAddNoteHandler = ({ title, note }) => {
        setNotes(
            prevNotes => [
                {
                    id: +new Date(),
                    title: title,
                    body: note,
                    createdAt: new Date().toISOString(),
                    archived: false,
                },
                ...prevNotes
            ]
        );
    };

    const onDeleteHandler = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    };

    const onArchiveHandler = (id) => {
        setNotes(
            prevNotes => {
                return prevNotes.map(note => {
                    if (note.id === id) {
                        // Create a new object with the updated archived value
                        return {
                            ...note,
                            archived: !note.archived
                        };
                    }
                    return note; // Return unchanged note if id doesn't match
                });
            }
        );
    };

    const onSearchNoteHandler = (query) => {
        setQuerySearch(query);
    };

    return (
        <>
            <NoteHeader searchNote={onSearchNoteHandler} />
            <NoteBody
                notes={notes}
                querySearch={querySearch}
                addNote={onAddNoteHandler}
                onArchive={onArchiveHandler}
                onDelete={onDeleteHandler} 
            />
        </>
    );
};

export default NoteApp;
