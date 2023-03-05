
/*
 * Отвечает за отображение заголовка, цвет, обработку клика. Так же может принять кнопку(прим. "Эфир" в блоке Телепрограмма)
 */
export default function Title({ title, color, onClick, children }) {
  return (
    <>
      <a style={{ color: color, marginRight: '1rem' }} onClick={onClick}>{title}</a>
      {children}
    </>
  );
}