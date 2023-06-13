import React from "react";
import { getProductById } from "@/services/product.service";
import "swiper/css";
import "swiper/css/navigation";
import ProductImgSlide from "./ProductImgSlide";
export default async function Item1({ params: { id } }) {
  const data = await getProductById(id);
 
  return (
    <div className="detail">
      <ProductImgSlide images={data.images} />
      <div className="detai-name">{data.title}</div>
      <div className="detai-des">{data.description}</div>
    </div>
  );
}
