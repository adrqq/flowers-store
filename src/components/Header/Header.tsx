import s from "./Header.module.scss";
import Image from "next/image";
import Link from 'next/link'

import siteLogo from "@/assets/img/flower-logo.png";
import cartLogo from "@/assets/svg/cart-gray.svg"

export type HeaderProps = {
  // props go here
};
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
          <Link
            href={"/"}
            className={s.header__main__nav__item}
          >
            Акції
          </Link>

          <Link
            href={"/"}
            className={s.header__main__nav__item}
          >
            Каталог товарів
          </Link>

          <Link
            href={"/"}
            className={s.header__main__nav__item}
          >
            Інформація
          </Link>

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
          href="tel:+38 (099) 043 58 79"
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
