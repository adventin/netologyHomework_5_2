/* Элемент списка новостей с иконкой новостного источника и ссылкой на новость */

export default function NewsListItem({ title, img, link }) {
  return (
    <li>
      <a href={link}>
        <img src={img} />
        <span>{title}</span>
      </a>
    </li>
  );
}