import Title from "./Title";
import Today from "./Today";

/* Отвечает за отображение самых важных новостей за последнее время, сегодняшняя дата и время */
export default function TopNews(props) {
  return (
    <div>
      <Title title="Сейчас в СМИ" />
      <Title title="В Германии" />
      <Title title="Рекомендуем" />
      <Today date="31 июля, среда 02:32" />
    </div>
  );
}