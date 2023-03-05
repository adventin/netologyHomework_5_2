import MenuItem from "./MenuItem";

/*
 * Меню основный инструментов
 */
export default function Menu({ title, color, onClick }) {
  return (
    <div>
      <ul>
        <MenuItem title="MenuItem #1" />
        <MenuItem title="MenuItem #2" />
        <MenuItem title="MenuItem #3" />
      </ul>
    </div>
  );
}