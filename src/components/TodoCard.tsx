import { useEffect, useReducer } from "react";
import NewTodoForm from "./NewTodoForm";
import Todos from "./Todos";
import todosReducer from "../hooks/todosReducer";
import { getStorage, setStorage } from "../storage/storage";
import Todo from "../types/Todo";

export default function TodoCard() {
  const [state, dispatch] = useReducer(todosReducer, getStorage());

  useEffect(() => setStorage(state), [state]);

  return (
    <div>
      <NewTodoForm
        onSubmit={(value: Todo["value"]) =>
          dispatch({ type: "new", newValue: value })
        }
      />
      <Todos
        todos={state}
        onProgressChange={(id, progress) =>
          dispatch({ type: "changeProgress", id, progress })
        }
        onDelete={(id) => dispatch({ type: "delete", id })}
      />
    </div>
  );
}
