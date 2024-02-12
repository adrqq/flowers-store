import CardItem from "@/UI/CardItem/CardItem";
import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import s from "./Header.module.scss";

export type HeaderProps = {
  // props go here
};
export default function Header(props: HeaderProps) {
  return (
    <header className={s.header}>
      <CardItem />
    </header>
  );
}
