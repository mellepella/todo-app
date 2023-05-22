import { useReducer } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
import todosReducer from "./hooks/todosReducer";

function App() {
  const [state, dispatch] = useReducer(todosReducer, []);

  return (
    <div className="App">
      <NewTodoForm
        onSubmit={(value: string) =>
          dispatch({ type: "new_todo", newValue: value })
        }
      />
      <Todos todos={state} />
    </div>
  );
}

export default App;
