import React, { useState } from "react";
import { useTodos } from "./TodoContext";

export function TodoList() {
  const { state, dispatch } = useTodos();
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: { id: Date.now(), task: newTask } });
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.tasks.length === 0 ? (
          <li>No tasks, add a task</li>
        ) : (
          state.tasks.map((task) => (
            <li key={task.id}>
              {task.task}
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: task.id })
                }
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
