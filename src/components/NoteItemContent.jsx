import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemContent({ title, date, note }) {
    return (
        <div className="p-3 flex-1">
            <h3 className="truncate mb-1">{title}</h3>
            <p className="text-sm mb-2 text-gray-300">{showFormattedDate(date)}</p>
            <p className="text-base">{note}</p>
        </div>
    );
};

export default NoteItemContent;
