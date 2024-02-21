import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import DropdownButton from "@/UI/DropdownButton/DropdownButton";
import BannerBlock from "@/components/BannersBlock/BannerBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerBlock />
    </main>
  );
}
