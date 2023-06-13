import Image from "next/image";
import { getProducts } from "@/services/product.service";
import Link from "next/link";
export default async function Home() {
  const data = await getProducts({ page: 1 });
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <Link className="item" href={`/product/${item.id}`} key={item.id}>
          <div className="item-img">
            <img src={item.thumbnail} alt="" />
          </div>
          <div className="item-name">{item.title}</div>
          <div className="item-des">{item.description}</div>
        </Link>
      ))}
    </>
  );
}
