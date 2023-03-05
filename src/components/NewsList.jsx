import NewsListItem from './NewsListItem'
/*
 * Отвечает за отображение последних новостей
 */
export default function NewsList({ title, color, onClick }) {
  return (
    <div>
      <ul>
        <NewsListItem title="Новость тра-ла-ла" />
        <NewsListItem title="Новость тра-ла-ла" />
        <NewsListItem title="Новость тра-ла-ла" />
        <NewsListItem title="Новость тра-ла-ла" />
        <NewsListItem title="Новость тра-ла-ла" />
      </ul>
    </div>
  );
}