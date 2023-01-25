import React, { useState } from "react";
import "./CreateTicket.scss";
import { useProject } from "../../context/projectContext";
import { v4 as uuidv4 } from "uuid";

export default function CreateTicket({ setShowAddTicket }) {
  const { addTicket } = useProject();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([""]);

  return (
    <div className="modal">
      <div className="modal-card">
        <h3 className="heading-l">Add New Task</h3>
        <button
          onClick={() => {
            setShowAddTicket();
          }}
        >
          close model
        </button>
        <div className="modal-input-group">
          <label htmlFor="" className="body-m">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g Take Starwars break"
          />
        </div>
        <div className="modal-input-group">
          <label htmlFor="description" className="body-m">
            Description
          </label>
          <textarea
            type="text"
            id={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g Take Starwars break"
          />
        </div>
        <div className="modal-input-group">
          <label htmlFor="subtask" className="body-m">
            Subtask
          </label>
          {tasks.map((task, index) => (
            <input
              type="text"
              id="subtask"
              placeholder="e.g Take Starwars break"
              value={task}
              onChange={(e) => {
                tasks[index] = e.target.value;
                setTasks([...tasks]);
              }}
            />
          ))}
          <button
            onClick={() => {
              setTasks(tasks.concat(""));
            }}
          >
            +Add new task
          </button>
        </div>
        <button
          onClick={() => {
            if (!title || !description) return;

            addTicket({
              id: uuidv4(),
              title,
              description,
              tasks,
            });
            setShowAddTicket(false);
          }}
        >
          Create ticket
        </button>
      </div>
    </div>
  );
}
