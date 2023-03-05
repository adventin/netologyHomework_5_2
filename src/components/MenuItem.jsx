/*
 * Элемент меню
 */
export default function MenuItem({ title, link }) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
}