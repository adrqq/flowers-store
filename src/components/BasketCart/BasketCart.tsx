import Image from "next/image";
import s from "./BasketCart.module.scss";
import Counter from "@/UI/Counter";
import trash from "@/assets/svg/trash.svg";

import flowerImage from "@/assets/img/bouquet-rose.png";

const BasketCart = () => {
  return (
    <div className={s.basket}>
      <Image className={s.basket__image} src={flowerImage} alt="Basket" />

      <div className={s.basket__couple}>
        <span className={s.basket__name}> 25 желтых тюльпанов </span>

        <span className={s.basket__price}> 795 ₴ </span>

        <Counter fontSize={18} />
      </div>

      <span className={s.basket__total}> 795 ₴ </span>

      <button className={s.basket__remove}>
        <Image
          className={s.basket__icon}
          src={trash}
          alt="Remove"
          width={28}
          height={28}
        />
      </button>
    </div>
  );
};

export default BasketCart;
