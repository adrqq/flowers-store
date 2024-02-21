"use client";
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from "react";

import s from "./DropdownButton.module.scss"
import polygonIcon from "@/assets/svg/polygon-black.svg"
import { Category, Subcategory } from "@/types/Category";
import arrowLeft from "@/assets/svg/arrow-black.svg"
import Link from "next/link";

export type DropdownButtonProps = {
  text: string,
  categories: Category[]
};

export default function DropdownButton({
  text = 'button',
  categories,
}: DropdownButtonProps) {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [isInnerPanelOpen, setIsInnerPanelOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [considerOuter, setConsiderOuter] = useState<boolean>(false);

  useEffect(() => {
    if (isPanelOpen) {
      const closePanel = (e: MouseEvent) => {
        if (!(e.target as Element).closest(`.${s.dd}`) || (e.target as Element).closest(`.${s.outer_cn322}`)) {
          setIsPanelOpen(false);
          setIsInnerPanelOpen(false);
          setSelectedCategory(null);
        }
      };

      document.addEventListener('click', closePanel);
      return () => document.removeEventListener('click', closePanel);
    }
  }, [isPanelOpen]);

  useEffect(() => {
    setTimeout(() => {
      setConsiderOuter(false)
    }, 1)
  }, [isPanelOpen]);

  const handleOpenSubcategories = (category: Category): void => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setIsInnerPanelOpen(true);

      return;
    }

    if (isInnerPanelOpen) {
      setSelectedCategory(null)
      setIsInnerPanelOpen(false);
    } else {
      setSelectedCategory(category);
      setIsInnerPanelOpen(true);
    }
  }

  const handleMainButtonClick = (): void => {
    if (isPanelOpen) {
      setIsInnerPanelOpen(false);
      setSelectedCategory(null);
      setConsiderOuter(true);
    }

    setConsiderOuter(true);
    setIsPanelOpen(!isPanelOpen);
  }

  return (
    <div className={`${s.dd} ${considerOuter && s.outer_cn322}`}>
      <button
        onClick={() => handleMainButtonClick()}
        className={s.dd__button}
      >
        <p className={s.dd__button__text}>
          {text}
        </p>

        <Image
          src={polygonIcon}
          alt="polygon"
          className={`${s.dd__button__img} ${isPanelOpen && s.dd__button__img__open}`}
        />
      </button>

      {isPanelOpen && (
        <div className={s.dd__panel}>
          {categories.map((category, index) => (
            <button
              type="button"
              key={index}
              className={`${s.dd__panel__button} ${category.name === selectedCategory?.name && s.dd__panel__button__open}`}
              onClick={() => handleOpenSubcategories({
                ...category,
                index,
              })}
            >
              <p className={s.dd__panel__button__text}>
                {category.name}
              </p>

              <Image
                src={arrowLeft}
                alt="arrow-left"
                className={`${s.dd__panel__button__icon} ${category.name === selectedCategory?.name && s.dd__panel__button__icon__open}`}
              />
            </button>
          ))}
        </div>
      )}

      {isInnerPanelOpen && (
        <div
          className={s.dd__panel_inner}
          style={{
            top: `${selectedCategory ? 50 * ((selectedCategory.index || 0) + 1) : ""}px`
          }}
        >
          {selectedCategory?.subcategories.map((subcategory: Subcategory, index: number) => (
            <Link
              key={index}
              className={s.dd__panel__button}
              href={subcategory.link}
            >
              <p className={s.dd__panel__button__text}>
                {subcategory.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
