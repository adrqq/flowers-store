"use client";

import Image from "next/image";
import s from "./Counter.module.scss";

import arrow from "@/assets/svg/arrow-gray.svg";
import { useState } from "react";

export type CounterProps = {
  fontSize: number;
};
export default function Counter({fontSize}: CounterProps) {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }

    return;
  };

  const handlePlus = () => {
    setCount(count + 1);
    return;
  };

  return (
    <div className={s.counter}>
      <button onClick={handleMinus} className={s.counter__button}>
        <Image
          className={`${s.counter__logo} ${s.counter__logo_minus}`}
          src={arrow}
          alt="Minus"
          width={24}
          height={24}
        />
      </button>

      <span style={{ fontSize: `${fontSize}px` }} className={s.counter__count}>{count}</span>

      <button onClick={handlePlus} className={s.counter__button}>
        <Image
          className={`${s.counter__logo} ${s.counter__logo_plus}`}
          src={arrow}
          alt="Plus"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
