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
    };

export default function todosReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "new":
      return [...state, { value: action.newValue, id: uniqid() }];

    case "delete":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw Error("Unknown action.");
  }
}
