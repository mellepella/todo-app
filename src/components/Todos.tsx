import Todo from "../types/Todo";

type Props = {
  todos: Todo[];
};

export default function Todos({ todos }: Props) {
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.value}</p>
      ))}
    </>
  );
}
