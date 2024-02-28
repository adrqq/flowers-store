import s from "./Chekbox.module.scss";

export type ChekboxProps = {
  text: string;
};

export default function Chekbox({text}: ChekboxProps) {
  return (
    <div className={s.checkbox}>
      <input className={s.checkbox__input} type="checkbox" />

      <label className={s.checkbox__text} >{text}</label>
    </div>
  );
}
