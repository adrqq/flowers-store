import s from './PageInfo.module.scss';
import Image from 'next/image';
import arrow from "@/assets/svg/arrow-gray.svg";
import Counter from '@/UI/Counter';
import { InputType } from '@/models/InputType';
import FlowerButton from '@/UI/FlowerButton/FlowerButton';
import OrderInputText from '@/UI/OrderInputText/page';
import PageReview from '@/components/PageReview/PageReview';

const PageInfo = () => {
  return (
    <div className={s.product_card__right}>
      <div className={s.product_card__category}>
        <span className={s.product_card__category__text}>
          букеты из тулюпанов
        </span>

        <Image
          className={s.product_card__category__img}
          src={arrow}
          alt="arrow"
          width={15}
          height={15}
        />
      </div>

      <h1 className={s.product_card__title}>25 желтых тюльпанов</h1>

      <span className={s.product_card__text}>в наявності</span>

      <h2 className={s.product_card__price}>795.00 грн</h2>

      <div className={s.product_card__info}>
        <div className={s.product_card__info__item}>
          <span className={s.product_card__info__title}>Квіти</span>

          <span className={s.product_card__info__text}>
            25 желтых тюльпанов
          </span>
        </div>

        <div className={s.product_card__info__item}>
          <span className={s.product_card__info__title}>Розмір</span>

          <span className={s.product_card__info__text}>50-60 см</span>
        </div>

        <div className={s.product_card__info__item}>
          <span className={s.product_card__info__title}>Матеріали</span>

          <span className={s.product_card__info__text}>
            Декоративний флористичний матеріал
          </span>
        </div>

        <div className={s.product_card__info__item}>
          <span className={s.product_card__info__title}>Додатково</span>

          <span className={s.product_card__info__text}>Оформлення</span>
        </div>
      </div>

      <div className={s.product_card__functional}>
        <Counter fontSize={24} />

        <FlowerButton text="В корзину" />
      </div>

      <span className={s.product_card__fast_order__text}>
        бистре замовлення
      </span>

      <div className={s.product_card__fast_order}>
        <div className={s.product_card__fast_order__input}>
          <OrderInputText type={InputType.text} text="Номер телефона" width={0} />
        </div>

        <div className={s.product_card__fast_order__button}>
          <FlowerButton text="замовити" />
        </div>
      </div>

      {/* <div className={s.product_card__review}>
        <span>Доставка</span>

        <span>Опис</span>

        <span>Відгуки</span>
      </div>

      <span className={s.product_card__review__text}>
        Тюльпан - символ любви, весеннего обновления, счастья, теплой и
        солнечной погоды и хорошего приподнятого настроения! Тюльпан
        отличается элегантностью форм и изысканностью линий. Если Вы
        подбираете букет цветов для близкого, дорогого человека, коллеге по
        работе, то, как нельзя, кстати, придутся нежные чарующие тюльпаны.
        Преподнося тюльпаны Вы дарите частичку легкого и весеннего настроения!
      </span> */}

      <PageReview />
    </div>
  )
}

export default PageInfo