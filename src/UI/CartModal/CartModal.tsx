import React, { useState } from "react";
import Image from "next/image";
import s from "./CartModal.module.scss";
import { StaticImageData } from "next/image";
import bouquetRose from "../../assets/img/bouquet-rose.png";
import FlowerButton from "../FlowerButton/FlowerButton";
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Rose Bouquet", price: 250, image: bouquetRose },
    { id: 2, name: "Tulip Mix", price: 180, image: bouquetRose },
  ]);


  const handleDeleteProduct = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOrder = () => {
    alert("Go to order page");
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={s.cartModal}>
      <div className={s.cartModal__overlay} onClick={onClose} />
      <div className={s.cartModal__content}>
        <h2 className={s.cartModal__title}>Your Cart</h2>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className={s.cartModal__item}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className={s.cartModal__item__image}
                />
                <div className={s.cartModal__item__details}>
                  <span className={s.cartModal__item__name}>{item.name}</span>
                  <span className={s.cartModal__item__price}>${item.price}</span>
                </div>
                <button
                  className={s.cartModal__item__deleteBtn}
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div className={s.cartModal__footer}>
              <div className={s.cartModal__total}>
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
              {/* <button className={s.cartModal__orderBtn} onClick={handleOrder}>
                Go To Order
              </button> */}
              <FlowerButton text="Перейти до замовлення" />
            </div>
          </>
        ) : (
          <p className={s.cartModal__empty}>Your cart is empty.</p>
        )}
      </div>
    </div >
  );
}
