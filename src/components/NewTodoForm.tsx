import { useState } from "react";

type Props = {
  onSubmit: (value: string) => void;
};

export default function NewTodoForm({ onSubmit }: Props) {
  const [todoValue, setTodoValue] = useState("");

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(todoValue);
        setTodoValue("");
      }}
    >
      <input
        type="text"
        value={todoValue}
        onChange={({ target }) => setTodoValue(target.value)}
        placeholder="What do you need to do?"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
