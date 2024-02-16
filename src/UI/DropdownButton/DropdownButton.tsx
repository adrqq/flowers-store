"use client";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useCallback } from "react";

import s from "./DropdownButton.module.scss"
import polygonIcon from "@/assets/svg/polygon-black.svg"
import { Category } from "@/types/Category";
import arrowLeft from "@/assets/svg/arrow-black.svg"

export type DropdownButtonProps = {
  text: string,
  categories: Category[]
};

export default function DropdownButton({
  text = 'button',
  categories,
}: DropdownButtonProps) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <div className={s.dd}>
      <button className={s.dd__button}>
        <p className={s.dd__button__text}>
          {text}
        </p>

        <Image
          src={polygonIcon}
          alt="polygon"
          className={s.dd__button__img}
        />
      </button>

      {true && (
        <div className={s.dd__panel}>
          {categories.map((category, index) => (
            <button
              type="button"
              key={index}
              className={s.dd__panel__button}
            >
              <p className={s.dd__panel__button__text}>
                {category.name}
              </p>

              <Image
                src={arrowLeft}
                alt="arrow-left"
                className={s.dd__panel__button__icon}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
