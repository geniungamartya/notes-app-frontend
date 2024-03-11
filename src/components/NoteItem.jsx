import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, date, note, archived, onArchive, onDelete }) {
    return (
        <div className="border border-gray-300 rounded overflow-hidden flex flex-col">
            <NoteItemContent title={title} date={date} note={note} />
            <NoteItemAction 
                id={id}
                archived={archived}
                onArchive={onArchive} 
                onDelete={onDelete} 
            />
        </div>
    );
};

export default NoteItem;
