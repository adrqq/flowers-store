import OrderInputText from "@/UI/OrderInputText/page";
import s from "./OrderDetails.module.scss";
import { InputType } from "@/models/InputType";
import Chekbox from "@/UI/Chekbox";

export type OrderDetailsProps = {
  // props go here
};
export default function OrderDetails(props: OrderDetailsProps) {
  return (
    <div className={s.order_details}>
      <span className={s.order_details__text}>1. Деталі доставки</span>

      <div className={s.order_details__list}>
        <Chekbox text="Доставка сюрпризом" />

        <Chekbox text="Фотоотчет (+15 грн) " />

        <Chekbox text="Добавити вазу (+249 грн) " />

        <Chekbox text="Напомнити про подію" />

        <div className={s.order_details__postcard__wrapper}>
          <Chekbox text="листівка" />

          <div className={s.order_details__postcard}>
            <Chekbox text="візитка" />

            <Chekbox text="Повномасштабна листівка (+ 79грн)" />
          </div>
        </div>

        <OrderInputText
          width={415}
          text="Привід для листівки"
          type={InputType.text}
        />

        <OrderInputText
          width={415}
          // placeholder="до 70 символів"
          text="Текст листівки"
          type={InputType.text}
        />
      </div>
    </div>
  );
}
