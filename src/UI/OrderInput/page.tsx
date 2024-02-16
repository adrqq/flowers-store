import styles from './page.module.scss';

const OrderInput = () => {
  return (
    <div className={styles.input__group}>
      <input className={styles.input__group__input} type="text" placeholder=" " name="username" id="username" autoComplete="off" required />
      <label className={styles.input__group__label} htmlFor="username">Имя получателя</label>
    </div>
  );
};

export default OrderInput;
