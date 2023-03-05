import { Children } from "react";

/* Элемент списка принимающий текст в различных вариантах(с иконкой, без и т.д.) */
export default function ListItem({ children }) {

  return (
    <li>{children}</li>
  );
}