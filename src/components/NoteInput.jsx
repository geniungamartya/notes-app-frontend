import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const maxChar = 50;

    const onTitleChangeEventHandler = (event) => {
        setTitle(event.target.value.slice(0, maxChar));
    };

    const onNoteChangeEventHandler = (event) => {
        setNote(event.target.value);
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        addNote({ title, note });
        setTitle('');
        setNote('');
    };

    return(
        <div  className="mx-auto max-w-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Create Note</h2>
            <form onSubmit={onSubmitEventHandler}>
                <p className="text-sm text-right text-gray-300">Character Left: {maxChar - title.length}</p>
                <input 
                    type="text" 
                    placeholder="Title .." 
                    value={title} 
                    onChange={onTitleChangeEventHandler} 
                    required
                    className="block w-full font-bold px-4 py-3 mb-3 bg-transparent border border-gray-300 rounded"
                />
                <textarea
                    placeholder="Note .." 
                    value={note} 
                    onChange={onNoteChangeEventHandler}
                    required
                    className="block w-full min-h-32 px-4 py-3 mb-3 bg-transparent border border-gray-300 rounded"
                />
                <button className="btn w-full" type="submit">Add</button>
            </form>
        </div>
    )
};

export default NoteInput;
