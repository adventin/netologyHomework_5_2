import Title from "./Title";

/* Блок погоды */
export default function Weather(props) {

  return (
    <div>
      <Title title="Погода" />
      <div>
        <img />
        <span>+17</span>
        <span>Утром +17</span>
      </div>
    </div>
  );
}