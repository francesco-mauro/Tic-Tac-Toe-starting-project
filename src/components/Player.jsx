import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleNameChange(event) {
        setEditedName(event.target.value);
    }

    function handleSaveClick() {
        setIsEditing(false);
    }

    let playerName = <span className="player-name">{name}</span>
    // let btnCaption = "Edit";

    if (isEditing) {
        playerName = <input type="text" required />
        // btnCaption = "Save";
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}