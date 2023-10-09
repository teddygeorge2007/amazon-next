import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}
// const inter = Inter({ subsets: ['latin'] })

export default function Home({ productData }: Props) {
  // console.log(productData);
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-30 xl:-mt-60 z-20 mb-">
          <Products productData={productData} />
        </div> 
      </div>
    </main>
  );
}
// data fetching https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } }; 
};
