import BasketCart from "@/components/BasketCart/BasketCart";
import s from "./page.module.scss";
import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import BasketOrder from "@/components/BasketOrder";

const BasketPage = () => {
  return (
    <main className={s.basket}>
      <div className={s.basket__list}>
        <BasketCart />

        <BasketCart />

        <BasketCart />
      </div>

      <BasketOrder />
    </main>
  );
};

export default BasketPage;
