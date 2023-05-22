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
        if (todoValue !== "") {
          onSubmit(todoValue);
          setTodoValue("");
        }
      }}
    >
      <input
        className="p-2 text-black rounded-l-xl w-2/3"
        type="text"
        value={todoValue}
        onChange={({ target }) => setTodoValue(target.value)}
        placeholder="I have to..."
      />
      <input
        className="bg-slate-300 w-1/3 p-2 text-black rounded-r-xl"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
