import React from 'react';
 
function NoteDelete({ id, onDelete }) {
    return (
         <button className="btn btn-error m-1 flex-1" onClick={() => onDelete(id)}>Delete</button>
    )
}
 
export default NoteDelete;
