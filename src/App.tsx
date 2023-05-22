import { useEffect, useReducer } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
import todosReducer from "./hooks/todosReducer";
import Todo from "./types/Todo";
import { getStorage, setStorage } from "./storage/storage";

function App() {
  const [state, dispatch] = useReducer(todosReducer, getStorage());

  useEffect(() => setStorage(state), [state]);

  return (
    <div className="App">
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

export default App;
