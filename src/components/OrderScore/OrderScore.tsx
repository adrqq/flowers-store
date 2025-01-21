import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import s from "./OrderScore.module.scss";

export type OrderScoreProps = {
  // props go here
};

export default function OrderScore(props: OrderScoreProps) {
  return (
    <div className={s.order_score__order}>
      <h1 className={s.order_score__title}>Ваш заказ</h1>

      <div className={s.order_score__info__container}>
        <div className={s.order_score__info}>
          <span className={s.order_score__info__text}>
            {" "}
            25 желтых тюльпанов
          </span>

          {/* <div className={s.order_score__info__couple}> */}
          <span>2</span>

          <span className={s.order_score__info__price}>1558 ₴</span>
          {/* </div> */}
        </div>

        <div className={s.order_score__info}>
          <span className={s.order_score__info__text}>
            {" "}
            25 розовых пионовидных роз
          </span>

          {/* <div className={s.order_score__info__couple}> */}
          <span>2</span>

          <span className={s.order_score__info__price}>1558 ₴</span>
          {/* </div> */}
        </div>

        <div className={s.order_score__info}>
          <span className={s.order_score__info__text}> Мечтательница</span>

          {/* <div className={s.order_score__info__couple}> */}
          <span>2</span>

          <span className={s.order_score__info__price}>1558 ₴</span>
          {/* </div> */}
        </div>
      </div>

      <div className={s.order_score__count}>
        <div className={s.order_score__amount}>
          <span className={s.order_score__amount__text}>Сума замовлення</span>

          <span className={s.order_score__amount__price}>1558 ₴</span>
        </div>

        <div className={s.order_score__amount}>
          <span className={s.order_score__amount__text}>Доставка</span>

          <span className={s.order_score__amount__price}>100 ₴</span>
        </div>

        <div className={s.order_score__amount}>
          <span className={s.order_score__amount__text}>Фотоотчет </span>

          <span className={s.order_score__amount__price}>1558 ₴</span>
        </div>
      </div>

      <div className={s.order_score__total}>
        <span className={s.order_score__total__text}>Всього</span>

        <span className={s.order_score__total__price}>1558 ₴</span>
      </div>

      <div className={s.order_score__button}>
        <FlowerButton text="Оформити замовлення" />
      </div>
    </div>
  );
}
