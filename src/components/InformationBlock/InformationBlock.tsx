"use client";

import Image from "next/image";
import s from "./InformationBlock.module.scss";

import siteLogo from "@/assets/svg/site-logo.svg";
import phoneIcon from "@/assets/svg/phone-black-ico.svg";
import mailIcon from "@/assets/svg/mail-black-ico.svg"
import SocialsLink from "@/UI/SocialsLink/SocialsLink";
import { MediaType } from "@/types/MediaType";

export type InformationBlockProps = {
  // props go here
};

export default function InformationBlock(props: InformationBlockProps) {
  return (
    <div className={s.info}>
      <div className={s.info_card}>
        <Image
          src={siteLogo}
          alt="flower-logo"
          className={s.info_card__logo}
        />

        <div className={s.info_card__data_block}>
          <div className={s.info_card__phone_numbers}>
            <div className={s.info_card__title}>
              <Image
                src={phoneIcon}
                alt="phone-icon"
                className={s.info_card__title__icon}
              />

              <p className={s.info_card__title__text}>
                Телефон:
              </p>
            </div>

            <div className={s.info_card__contacts}>
              <p className={s.info_card__contacts__item}>
                +38 (063) 829 30 30
              </p>

              <p className={s.info_card__contacts__item}>
                +38 (099) 043 58 79
              </p>
            </div>
          </div>

          <div className={s.info_card__mail}>
            <div className={s.info_card__title}>
              <Image
                src={mailIcon}
                alt="mail-icon"
                className={s.info_card__title__icon}
              />

              <p className={s.info_card__title__text}>
                Пошта:
              </p>
            </div>

            <div className={s.info_card__contacts}>
              <p className={s.info_card__contacts__item}>
                flowers-ukraine@gmail.com
              </p>
            </div>
          </div>

          <div className={s.info_card__socials}>
            <SocialsLink
              size={25}
              media={MediaType.Viber}
            />

            <SocialsLink
              size={25}
              media={MediaType.Insta}
            />

            <SocialsLink
              size={25}
              media={MediaType.Tg}
            />

            <SocialsLink
              size={25}
              media={MediaType.Fb}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
