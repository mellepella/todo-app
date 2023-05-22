import Todo from "../types/Todo";
import uniqid from "uniqid";

type Action =
  | {
      type: "new";
      newValue: string;
    }
  | {
      type: "delete";
      id: string;
    }
  | {
      type: "changeProgress";
      progress: Todo["progress"];
      id: string;
    };

export default function todosReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "new":
      return [
        ...state,
        { value: action.newValue, id: uniqid(), progress: "notStarted" },
      ];

    case "delete":
      return state.filter((todo) => todo.id !== action.id);

    case "changeProgress":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, progress: action.progress };
        }
        return todo;
      });
  }
}
