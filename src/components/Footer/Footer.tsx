import Image from "next/image";
import s from "./Footer.module.scss";
import flower from "@/assets/svg/site-logo.svg";
import Link from "next/link";

export type FooterProps = {
  // props go here
};
export default function Footer(props: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={s.footer__info}>
        <Image className={s.footer__logo} src={flower} alt="flower" />

        <ul className={s.footer__list__container}>
          <Link href="/info" className={s.footer__list__title}>ІНФОРМАЦІЯ</Link>

          <div className={s.footer__list}>
            <li className={s.footer__list__item}>
              <Link href="/about">ПРО НАС</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">ДОСТАВКА І ОПЛАТА</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</Link>
            </li>
          </div>
        </ul>

        <ul className={s.footer__list__container}>
          <Link href="/info" className={s.footer__list__title}>СЛУЖБА ПІДТРИМКИ</Link>

          <div className={s.footer__list}>
            <li className={s.footer__list__item}>
              <Link href="/about">КАРТА САЙТУ</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">ПОВЕРНЕННЯ ТОВАРУ</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">ЗВЯЗАТИСЯ З НАМИ</Link>
            </li>
          </div>
        </ul>

        <ul className={s.footer__list__container}>
          <Link href="/info" className={s.footer__list__title}>ОСОБИСТИЙ КАБІНЕТ</Link>

          <div className={s.footer__list}>
            <li className={s.footer__list__item}>
              <Link href="/about">ІСТОРІЯ ЗАМОВЛЕННЯ</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">ЗАКЛАДКИ</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">СПИСОК НОВИН</Link>
            </li>
          </div>
        </ul>

        <ul className={s.footer__list__container}>
          <Link href="/info" className={s.footer__list__title}>ДОДАТКОВО</Link>

          <div className={s.footer__list}>
            <li className={s.footer__list__item}>
              <Link href="/about">ПОДАРУНКОВІ СЕРТИФІКАТИ</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">АКЦІЇ</Link>
            </li>

            <li className={s.footer__list__item}>
              <Link href="/about">КВІТИ В ОФІС</Link>
            </li>
          </div>
        </ul>
      </div>

      <div className={s.row} />

      <div className={s.footer__bottom}>
        <span className={s.footer__copyright}>
          © 2024, Всі права захищені. Копіювання матеріалів заборонено.
        </span>

        <span className={s.footer__payment__text}>
          спосіби оплати:
        </span>
      </div>
    </footer>
  );
}
