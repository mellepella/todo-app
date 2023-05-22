import Todo from "../types/Todo";

type Props = {
  todos: Todo[];
  onDelete: (id: Todo["id"]) => void;
};

export default function Todos({ todos, onDelete }: Props) {
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id} onClick={() => onDelete(todo.id)}>
          {todo.value}
        </p>
      ))}
    </>
  );
}
