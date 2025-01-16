import BasketCart from "@/components/BasketCart/BasketCart";
import s from "./page.module.scss";
import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import BasketOrder from "@/components/BasketOrder/BasketOrder";

const BasketPage = () => {
  return (
    <main className={s.basket}>
      <div className={s.basket}>
        <div className={s.basket__list}>
          {/* <span className={`${s.basket__naming_flower} ${s.basket__naming}`}>
            Назва
          </span>

          <span className={`${s.basket__naming_price} ${s.basket__naming}`}>
            Ціна за шт.
          </span>

          <span className={`${s.basket__naming_count} ${s.basket__naming}`}>
            Кількіть
          </span>

          <span className={`${s.basket__naming_total} ${s.basket__naming}`}>
            Разом
          </span> */}

          <BasketCart />

          <BasketCart />

          <BasketCart />
        </div>

        <BasketOrder />
      </div>
    </main>
  );
};

export default BasketPage;
