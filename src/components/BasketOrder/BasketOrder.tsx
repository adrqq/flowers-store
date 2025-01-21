import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import s from "./BasketOrder.module.scss";

export type BasketOrderProps = {
  // props go here
};
export default function BasketOrder(props: BasketOrderProps) {
  return (
    <div className={s.basket__order}>
      <h1 className={s.basket__title}>Ваш заказ</h1>

      <div className={s.basket__info__container}>
        <div className={s.basket__info}>
          <span className={s.basket__info__text}> Товари</span>

          <span className={s.basket__info__price}>1558 ₴</span>
        </div>

        <div className={s.basket__info}>
          <span className={s.basket__info__text}> Скидка</span>

          <span className={s.basket__info__price}>0 ₴</span>
        </div>
      </div>

      <div className={s.basket__total}>
        <span className={s.basket__total__text}>Всього</span>

        <span className={s.basket__total__price}>1558 ₴</span>
      </div>

      <div className={s.basket__button}>
        <FlowerButton text="Оформити замовлення" />

      </div>
    </div>
  );
}
