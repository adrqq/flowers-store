import s from "./Header.module.scss";
import Image from "next/image";
import Link from 'next/link'

import siteLogo from "@/assets/img/flower-logo.png";
import cartLogo from "@/assets/svg/cart-gray.svg";
import DropdownButton from "@/UI/DropdownButton/DropdownButton";
import { Category } from "@/types/Category";

export type HeaderProps = {
  // props go here
};

const categories: Category[] = [
  {
    name: "Рози",
    subcategories: [
      {
        name: "Червоні рози",
        link: "https://google.com"
      },
      {
        name: "Рожеві рози",
        link: "https://google.com"
      },
      {
        name: "Білі рози",
        link: "https://google.com"
      }
    ]
  },
  {
    name: "Польові квіти",
    subcategories: [
      {
        name: "Ромашки",
        link: "https://google.com"
      },
      {
        name: "Під сніжники",
        link: "https://google.com"
      },
      {
        name: "Гіпофізи",
        link: "https://google.com"
      }
    ]
  },
  {
    name: "Тюльпани",
    subcategories: [
      {
        name: "Блакитні тюльпани",
        link: "https://google.com"
      },
      {
        name: "Білі тюльпани",
        link: "https://google.com"
      },
      {
        name: "Рожеві тюльпани",
        link: "https://google.com"
      }
    ]
  }
]

export default function Header(props: HeaderProps) {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Image
          src={siteLogo}
          alt="site-logo"
          className={s.header__logo__image}
        />
      </div>

      <div className={s.header__main}>
        <div className={s.header__main__inputs}>
          <input
            className={s.search_input}
            type="text"
            placeholder="Пошук по товарам"
          />
        </div>

        <div className={s.header__main__nav}>
          <div className={s.header__main__nav__item}>
            <DropdownButton
              text={"Каталог товарів"}
              categories={categories}
            />
          </div>

          <Link
            href={"/"}
            className={s.header__main__nav__item}
          >
            Акції
          </Link>

          <div className={s.header__main__nav__item}>
            <DropdownButton
              text={"Інформація"}
              categories={categories}
            />
          </div>

        </div>
      </div>

      <div className={s.header__buttons}>
        <div className={s.header__buttons__socials}>
          <Link
            href={"https://google.com"}
            className={`${s.social_button} ${s.social_button__viber}`}
          />

          <Link
            href={"https://google.com"}
            className={`${s.social_button} ${s.social_button__insta}`}
          />

          <Link
            href={"https://google.com"}
            className={`${s.social_button} ${s.social_button__tg}`}
          />

          <Link
            href={"https://google.com"}
            className={`${s.social_button} ${s.social_button__fb}`}
          />
        </div>

        <a
          href="Tel:+38 (099) 043 58 79"
          className={s.header__buttons__number}
        >
          +38 (099) 043 58 79
        </a>

        <div className={s.header__buttons__order_info}>
          <Image
            src={cartLogo}
            alt="cart"
            className={s.header__buttons__order_info__cart}
          />

          <p className={s.header__buttons__order_info__price}>
            ₴ 1 520
          </p>
        </div>
      </div>
    </header>
  );
}
