import OrderInputText from "@/UI/OrderInputText/page";
import s from "./OrderSenderContacts.module.scss";
import { InputType } from "@/models/InputType";

export type OrderSenderContactsProps = {
  // props go here
};

export default function OrderSenderContacts(props: OrderSenderContactsProps) {
  return (
    <div className={s.order_contacts}>
      <span className={s.order_contacts__text}>1. Контакти отправника</span>

      <div className={s.order_contacts__list}>
        <OrderInputText  width={415} text="Імя" type={InputType.text} />
        <OrderInputText  width={415} text="Телефон" type={InputType.tel} />
        <OrderInputText  width={415} text="Email" type={InputType.text} />
      </div>
    </div>
  );
}
