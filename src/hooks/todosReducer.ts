import Todo from "../types/Todo";
import uniqid from "uniqid";

type Action = {
  type: "new_todo";
  newValue: string;
};

export default function todosReducer(state: Todo[], action: Action) {
  if (action.type === "new_todo") {
    return [...state, { value: action.newValue, id: uniqid() }];
  }
  throw Error("Unknown action.");
}
