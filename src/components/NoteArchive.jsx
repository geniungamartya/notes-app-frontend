import React from 'react';
 
function NoteArchive({ id, archived, onArchive }) {
    return (archived
        ? <button className="btn m-1 flex-1" onClick={() => onArchive(id)}>Show</button>
        : <button className="btn m-1 flex-1" onClick={() => onArchive(id)}>Archive</button>
    );
};
 
export default NoteArchive;
