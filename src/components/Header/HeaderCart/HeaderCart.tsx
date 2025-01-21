"use client";
import React, { useState } from 'react';
import s from './HeaderCart.module.scss';
import cartLogo from "@/assets/svg/cart-gray.svg";
import Image from 'next/image';
import CartModal from '@/UI/CartModal/CartModal';


const HeaderCart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className={s.header__buttons__order_info}
        onClick={() => setIsCartOpen(true)}
      >
        <Image src={cartLogo} alt="cart" />

        <p className={s.header__buttons__order_info__price}>
          ₴ 1 520
        </p>
      </div>
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}

    </>
  );
};

export default HeaderCart;