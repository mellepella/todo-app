import Todo from "../types/Todo";

const localStorageKey = "todos-storage";

export function setStorage(value: Todo[]) {
  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(localStorageKey, stringifiedValue);
}

export function getStorage(): Todo[] | [] {
  return JSON.parse(localStorage.getItem(localStorageKey) ?? "[]");
}
