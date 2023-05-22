import React from "react";
import Todo from "../types/Todo";

type Props = {
  todos: Todo[];
  onDelete: (id: Todo["id"]) => void;
  onProgressChange: (id: Todo["id"], progress: Todo["progress"]) => void;
};

export default function Todos({ todos, onDelete, onProgressChange }: Props) {
  return (
    <div className="pt-10">
      {todos.map((todo) => (
        <div key={todo.id} className="w-100 text-left flex flex-row py-2">
          <p
            className={`cursor-pointer w-2/3 p-2 bg-white text-black rounded-l-xl decoration-2 ${
              todo.progress === "done" ? "line-through" : ""
            }`}
            onClick={() => onDelete(todo.id)}
          >
            {todo.value}
          </p>
          <select
            value={todo.progress}
            className="w-1/3 p-2 bg-slate-300 rounded-r-xl text-black"
            id="progress"
            onChange={({ target }) =>
              onProgressChange(todo.id, target.value as Todo["progress"])
            }
          >
            <option value="notStarted">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
        </div>
      ))}
    </div>
  );
}
