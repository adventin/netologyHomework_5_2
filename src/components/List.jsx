import Title from "./Title";
import ListItem from "./ListItem";

/* Реализует список, с кастомизируемыми элементами-ссылками передав в него элементы как children */
export default function List({ title, items }) {

  return (
    <div>
      <Title title={title} />
      <ul>
        <ListItem />
      </ul>
    </div>
  );
}