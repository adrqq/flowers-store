import OrderInputText from "@/UI/OrderInputText/page";
import s from "./OrderContacts.module.scss";
import DatePicker from "@/UI/DatePicker";

enum InputType {
  text = "text",
  number = "number",
  tel = "tel",
  time = "time",
}

export type OrderContactsProps = {
  // props go here
};
export default function OrderContacts(props: OrderContactsProps) {
  return (
    <div className={s.order_contacts}>
      <span className={s.order_contacts__title}>1. Контакти отримувача</span>

      <div className={s.order_contacts__info}>
        <div className={s.order_contacts__info__left}>
          <OrderInputText text={"Імя отримувача"} type={InputType.text}  />

          <OrderInputText text={"Телефон"} type={InputType.tel} />

          <DatePicker />
        </div>

        <div className={s.order_contacts__info__left}>
          {/* <OrderInputText disabled={true} value="Ужгород" text="Регіон" />

          <OrderInputText text="Aдрес" />

          <OrderInputTime text="Час доставки" /> */}

          <OrderInputText text={"Регіон"} type={InputType.text} disabled={true} value={"Ужгород"} />

          <OrderInputText text='Адрес' type={InputType.text} />

          <OrderInputText text='Час доставки' type={InputType.time} />
        </div>
      </div>
    </div>
  );
}
