import Image from "next/image";
import s from "./page.module.scss";
import Counter from "@/UI/Counter";
import FlowerButton from "@/UI/FlowerButton/FlowerButton";
import OrderInputText from "@/UI/OrderInputText/page";
import { InputType } from "@/models/InputType";

import FlowersPhoto from "./components/FlowersPhoto/FlowersPhoto";
import PageInfo from "./components/PageInfo/PageInfo";

const ProductCard = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return (
    <div className={s.product_card}>


      <FlowersPhoto />

      {/* <PageInfo /> */}
    </div>
  );
};

export default ProductCard;
