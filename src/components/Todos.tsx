import React from "react";
import Todo from "../types/Todo";

type Props = {
  todos: Todo[];
  onDelete: (id: Todo["id"]) => void;
  onProgressChange: (id: Todo["id"], progress: Todo["progress"]) => void;
};

export default function Todos({ todos, onDelete, onProgressChange }: Props) {
  return (
    <>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <p onClick={() => onDelete(todo.id)}>{todo.value}</p>
          <select
            value={todo.progress}
            id="progress"
            onChange={({ target }) =>
              onProgressChange(todo.id, target.value as Todo["progress"])
            }
          >
            <option value="notStarted">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
        </React.Fragment>
      ))}
    </>
  );
}
