import Logo from "./Logo";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

/*
 * Основной бар поиска. Содержит логотип, меню, поле ввода и кнопку поиска
 */
export default function Bar({ }) {
  return (
    <>
      <Logo title="Logo" />
      <Menu />
      <SearchBar />
    </>
  );
}