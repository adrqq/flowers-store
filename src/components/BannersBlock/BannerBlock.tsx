import s from "./BannerBlock.module.scss";
import Image from "next/image";

import bigRosesBanner from "@/assets/img/big-banner-roses.jpg";
import redRoses from "@/assets/svg/red-roses.svg";
import present from "@/assets/svg/present-banner.svg";
import presentsBasket from "@/assets/svg/presents-basket-banner.svg"
import rosesBasket from "@/assets/svg/roses-basket-banner.svg"

export type BannerBlockProps = {
  // props go here
};

export default function BannerBlock(props: BannerBlockProps) {
  return (
    <div className={s.bb}>
      <div className={s.bb__photo_banners}>
        <div className={s.big_banner}>
          <Image
            src={bigRosesBanner}
            alt="roses-big-banner"
            className={s.big_banner__img}
            width={700}
            height={700}
          />

          <p className={s.big_banner__text}>
            Знижки <span className={s.white_text}>6%</span> на всі букети<br /> по <span className={s.white_text}>передзамовленню</span><br /> на 8 квітня
          </p>
        </div>


        <div className={s.quadruple_banners}>
          <div className={s.quadruple_banners__banner}>
            <Image
              src={redRoses}
              alt="red-roses-banner"
              className={s.quadruple_banners__banner__image}
            />

            <p className={s.quadruple_banners__banner__text}>
              Рози
            </p>
          </div>

          <div className={s.quadruple_banners__banner}>
            <Image
              src={present}
              alt="present-banner"
              className={s.quadruple_banners__banner__image}
            />

            <p className={s.quadruple_banners__banner__text}>
              Подарунки
            </p>
          </div>

          <div className={`${s.quadruple_banners__banner} ${s.quadruple_banners__banner__present_basket}`}>
            <Image
              src={presentsBasket}
              alt="presents-basket-banner"
              className={`${s.quadruple_banners__banner__image} ${s.quadruple_banners__banner__image__png}`}
            />

            <p className={s.quadruple_banners__banner__text}>
              Кошик<br />подарунків
            </p>
          </div>

          <div className={`${s.quadruple_banners__banner} ${s.quadruple_banners__banner__roses_box}`}>
            <Image
              src={rosesBasket}
              alt="roses-basket-banner"
              className={`${s.quadruple_banners__banner__image} ${s.quadruple_banners__banner__image__png}`}
            />

            <p className={s.quadruple_banners__banner__text}>
              Квіти в<br />коробці
            </p>
          </div>
        </div>
      </div>

      <div className={s.bb__info_banners}>
        <div className={`${s.bb__info_banners__banner} ${s.bb__info_banners__banner__1}`}>
          <h1 className={`${s.bb__info_banners__banner__title} ${s.bb__info_banners__banner__title__1}`}>
            Фото доставок<br /> наших букетів
          </h1>

          <p className={`${s.bb__info_banners__banner__text} ${s.bb__info_banners__banner__text__1}`}>
            Бездоганна якість<br />обслуговування та доставка у <br /> будь-яку точку міста
          </p>
        </div>

        <div className={`${s.bb__info_banners__banner} ${s.bb__info_banners__banner__2}`}>
          <h1 className={`${s.bb__info_banners__banner__title} ${s.bb__info_banners__banner__title__2}`}>
            Відео звіти клієнтів
          </h1>

          <p className={`${s.bb__info_banners__banner__text} ${s.bb__info_banners__banner__text__2}`}>
            Наші щасливі клієнти з букетами від BouquetLi
          </p>
        </div>

        <div className={`${s.bb__info_banners__banner} ${s.bb__info_banners__banner__3}`}>
          <h1 className={`${s.bb__info_banners__banner__title} ${s.bb__info_banners__banner__title__3}`}>
            Подарунок<br />кожному клієнту
          </h1>

          <p className={`${s.bb__info_banners__banner__text} ${s.bb__info_banners__banner__text__3}`}>
            До кожного замовлення ми надаємо<br />комплімент від компанії<br />
            у вигляді маленького презенту
          </p>
        </div>
      </div>
    </div >
  );
}
