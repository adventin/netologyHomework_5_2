
/*
 * Отображение акций
 */
export default function StocksItem({ title, difference }) {
  return (
    <li>
      <span>{title}</span>
      <span>{difference}</span>
    </li>
  );
}