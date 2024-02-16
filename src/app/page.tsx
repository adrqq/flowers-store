import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import DropdownButton from "@/UI/DropdownButton/DropdownButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <DropdownButton
        text={"Каталог товарів"}
        categories={[
          {
            name: "Рози",
            subcategories: [
              {
                name: "Червоні рози",
                link: "https://google.com"
              }
            ]
          },
          {
            name: "Польові квти",
            subcategories: [
              {
                name: "Червоні рози",
                link: "https://google.com"
              }
            ]
          },
          {
            name: "Тюльпани",
            subcategories: [
              {
                name: "Червоні рози",
                link: "https://google.com"
              }
            ]
          }
        ]}
      />
    </main>
  );
}
