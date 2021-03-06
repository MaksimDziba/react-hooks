import React from 'react';
import './notes.scss';

const Notes = ({ notes }) => {
  return (
    <ul class="list-group">
      {notes.map(note => (
        <li class="list-group-item note" key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>

          <button type="button" className="btn btn-outline-danger btn-sm">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
