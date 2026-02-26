import React, { useState } from "react";

function App() {
  const [notesList, setNotesList] = useState([]);

  const [noteDescription, setNoteDescription] = useState("");

  const updateNoteDescription = (e) => {
    console.log(e.target.value);
    setNoteDescription(e.target.value);
  };

  const removeNote = (idx) => {
    console.log(idx);
    const copyNotesList = [...notesList];
    copyNotesList.splice(idx, 1);

    setNotesList(copyNotesList);
  };

  const addNoteToList = (noteDesc) => {
    const copyNotesList = [...notesList];
    copyNotesList.push(noteDesc);

    setNotesList(copyNotesList);

    setNoteDescription("");
  };

  return (
    <div className="container text-3xl">
      <div className="top-part">
        <input
          placeholder="Enter Description"
          type="text"
          value={noteDescription}
          onChange={(e) => {
            updateNoteDescription(e);
          }}
        />
        <button
          onClick={() => {
            addNoteToList(noteDescription);
          }}
        >
          Add Note
        </button>
      </div>
      <div className="bottom-part">
        <ul className="border-2 p-3">
          {notesList.map((note, idx) => {
            return (
              <div key={idx} className="flex">
                <li className="border mb-2">{note}</li>
                <button
                  onClick={() => {
                    removeNote(idx);
                  }}
                >
                  REMOVE
                </button>
              </div>
            );
          })}
          {/* <li>A</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
