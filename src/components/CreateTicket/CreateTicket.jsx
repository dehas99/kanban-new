import React from "react";
import "./CreateTicket.scss";

export default function CreateTicket() {
  return (
    <div className="modal">
      <div className="modal-card">
        <h3 className="heading-l">Add New Task</h3>
        <div className="modal-input-group">
          <label htmlFor="" className="body-m">
            Title
          </label>
          <input type="text" id="title" placeholder="e.g Take Starwars break" />
        </div>
        <div className="modal-input-group">
          <label htmlFor="description" className="body-m">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            placeholder="e.g Take Starwars break"
          />
        </div>
      </div>
    </div>
  );
}
