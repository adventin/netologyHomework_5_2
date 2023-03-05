import StocksItem from "./StocksItem";

/*
 * Отображение акций
 */
export default function Stocks({ items }) {
  return (
    <div>
      <ul>
        <StocksItem title="USD MOEX 63,52" difference="+0.09" />
        <StocksItem title="USD MOEX 63,52" difference="+0.09" />
        <StocksItem title="USD MOEX 63,52" difference="+0.09" />
      </ul>
    </div>
  );
}