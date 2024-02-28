"use client";

import s from "./SocialsLink.module.scss"
import Link from "next/link";
import { MediaType } from "@/types/MediaType";

export type SocialsLinkProps = {
  size: number,
  media: MediaType
};

const links = {
  viber: "https://google.com/viber",
  insta: "https://google.com/insta",
  tg: "https://google.com/tg",
  fb: "https://google.com/fb"
}

export default function SocialsLink({
  size = 30,
  media,
}: SocialsLinkProps) {
  return (
    <Link
      href={links[media]}
      className={`
        ${s.socials_link} 
        ${media === MediaType.Viber && s.socials_link__viber}
        ${media === MediaType.Insta && s.socials_link__insta}
        ${media === MediaType.Tg && s.socials_link__tg}
        ${media === MediaType.Fb && s.socials_link__fb}
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        // backgroundSize: `${size - 15}px`
      }}
    />
  );
}
