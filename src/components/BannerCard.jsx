
/* Рекламный баннер, отображает картинку, заголовок, текст и ссылку */

export default function BannerCard({ image, title, text }) {

  return (
    <div>
      <img src={image} />
      <div><a>{title}</a></div>
      <div>{text}</div>
    </div>
  )
}