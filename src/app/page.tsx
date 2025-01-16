import styles from "./page.module.scss";
import BannerBlock from "@/components/BannersBlock/BannerBlock";
import InformationBlock from "@/components/InformationBlock/InformationBlock";
import SwiperBlock from "@/components/SwiperBlock/SwiperBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner_block__wrapper}>
        <BannerBlock />
      </div>

      <div className={styles.swiper_block__wrapper}>
        <SwiperBlock title="Акції" />
      </div>

      <div className={styles.swiper_block__wrapper}>
        <SwiperBlock title="Подарунки" />
      </div>

      <div className={styles.swiper_block__wrapper}>
        <SwiperBlock title="Сезонні" />
      </div>

      <div className={styles.info_block__wrapper}>
        <InformationBlock />
      </div>
    </main>
  );
}

