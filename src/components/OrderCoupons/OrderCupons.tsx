import OrderInputText from "@/UI/OrderInputText/page";
import s from "./OrderCoupons.module.scss";
import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import { InputType } from "@/models/InputType"

export type OrderCouponsProps = {
  // props go here
};
export default function OrderCoupons(props: OrderCouponsProps) {
  return (
    <div className={s.coupons}>
      <OrderInputText type={InputType.text} text="Купон " />

      <OrderInputText type={InputType.text} text="Подарочний сетифікат " />

      <div className={s.coupons__button}>
        <FlowerButton text="Застосувати" />
      </div>
    </div>
  );
}
