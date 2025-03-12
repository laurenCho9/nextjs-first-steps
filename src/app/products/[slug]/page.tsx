type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

const DynamicRouter = ({ params }: Props) => {
  return <div>{params.slug} 제품설명페이지</div>;
};
export default DynamicRouter;

// 정적 매개변수 생성
// 이 기능은 동적 경로 세그먼트generateStaticParams 와 함께 사용하여
// 요청 시점에 주문형으로 생성하는 대신 빌드 시점에 정적으로 경로를 생성
export async function generateStaticParams() {
  const products = ["women", "man", "pants", "skirt"];

  return products.map((product) => ({
    slug: product,
  }));
}
