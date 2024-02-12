import FlowerButton from "@/UI/FlowerButton/FlowerButton";

export type HeaderProps = {
  // props go here
};
export default function Header(props: HeaderProps) {
  return (
    <header>
      <FlowerButton text="Заказать" />
    </header>
  );
}
