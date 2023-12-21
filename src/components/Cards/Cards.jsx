import s from './style.module.scss';

export default function Cards({price, speed, color, titleColor, activeCards, setId, id}) {

  const choiceCard = activeCards ? 'active' : 'norm';

  function activeCardOk() {
    setId(id);
  }


  return (
    <div className={`${s.blockCards} ${s[choiceCard]}`} onClick={activeCardOk}>
      <div className={s[titleColor]}>
        <p>Безлимитный {price}</p>
      </div>
      <div className={s[color]}>
        <div >
          <p className={s.colorText}>руб</p>
        </div>
        <p><span>{price}</span>/мес</p>
      </div>
      <div className={s.speed}>
        <p>до {speed} Мбит/сек</p>
      </div>
      <div className={s.blockInfo}>
        <p className={s.info}>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  )
}
