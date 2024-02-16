import OrderInput from "@/UI/OrderInput/page";
import s from "./page.module.scss";
import DatePicker from "@/UI/DatePicker";

const OrderPage = () => {
  return (
    <div className={s.order}>
      <OrderInput />

      <DatePicker />
    </div>
  );
};

export default OrderPage;
