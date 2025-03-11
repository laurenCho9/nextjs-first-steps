import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shose"];

const ProductsPage = () => {
  return (
    <>
      <h1>제품소개페이지</h1>
      <ul className="products-item-nav">
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
