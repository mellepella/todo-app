import { useReducer } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
import todosReducer from "./hooks/todosReducer";
import Todo from "./types/Todo";

function App() {
  const [state, dispatch] = useReducer(todosReducer, []);

  return (
    <div className="App">
      <NewTodoForm
        onSubmit={(value: Todo["value"]) =>
          dispatch({ type: "new", newValue: value })
        }
      />
      <Todos
        todos={state}
        onDelete={(id: Todo["id"]) => dispatch({ type: "delete", id })}
      />
    </div>
  );
}

export default App;
