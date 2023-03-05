
/*
 * Отвечает за отображение баннера 
 */
export default function Banner({ img, title }) {
  return (
    <a>
      <img src={img} title={title} alt={title} />
    </a>
  );
}