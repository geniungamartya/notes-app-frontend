import React from "react";
import NoteDelete from "./NoteDelete";
import NoteArchive from "./NoteArchive";

function NoteItemAction({ id, archived, onArchive, onDelete }) {
    return (
        <div className="flex flex-row">
            <NoteArchive id={id} archived={archived} onArchive={onArchive}/>
            <NoteDelete id={id} onDelete={onDelete}/>
        </div>
    );
};

export default NoteItemAction;
