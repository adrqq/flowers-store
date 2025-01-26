import Image from "next/image";
import s from "./FlowerButton.module.scss";

import flower from "@/assets/svg/flower-rose.svg";
import { FC } from "react";

type FlowerButtonProps = {
  text?: string;
  width?: number;
};

const FlowerButton: FC<FlowerButtonProps> = ({ text = "Заказать", }) => {
  return (
    <button className={s.button}>
      <span className={s.button__text}>{text}</span>

      <Image
        className={s.button__image}
        src={flower}
        alt="Picture of the author"
      />
    </button>
  );
};

export default FlowerButton;

