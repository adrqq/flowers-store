import OrderScore from "@/components/OrderScore";
import s from "./page.module.scss";
import OrderContacts from "@/components/OrderContacts";
import OrderSenderContacts from "@/components/OrderSenderContacts";
import OrderCoupons from "@/components/OrderCoupons";
import OrderDetails from "@/components/OrderDetails";

const OrderPage = () => {
  return (
    <main className={s.order}>
      <div className={s.order__first_group}>
        <OrderContacts />

        <div className={s.order__first_group__contacts}>
          <OrderSenderContacts />

          <OrderDetails />
        </div>
      </div>

      <div className={s.order__second_group}>
        <OrderScore />

        <OrderCoupons />
      </div>
    </main>
  );
};

export default OrderPage;
