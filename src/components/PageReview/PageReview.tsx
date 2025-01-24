"use client";

import React, { useState } from "react";
import s from "./PageReview.module.scss";

export default function PageInfo() {
  const [openIndex, setOpenIndex] = useState(1);
  const tabs = [
    { label: "Доставка", content: "Some text about delivery..." },
    { label: "Опис", content: "Some text about product description..." },
    { label: "Відгуки", content: "Some text about feedback..." },
  ];

  return (
    <div className={s.product_card}>
      <div className={s.product_card__review}>
        {tabs.map((tab, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={s.product_card__review__item}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <span>
                {tab.label} {isOpen ? "▼" : "▶"}
              </span>
              {isOpen && (
                <div className={s.product_card__review__content}>
                  {tab.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

