# Next.js 첫걸음

25.03.03 ~

## 개발 환경 세팅

1. 설치

```
npx create-next-app@latest
```

혹은

```
yarn create next-app .
```

❗️왜 yarn은 @latest 를 안붙이지?
yarn create 자체가 최신 버전을 자동으로 가져오기 때문에 따로 명시하지 않아도 된다.

_역시 yarn.._

2. 실행

```
yarn dev
```

react vite와는 다르게 yarn 설치 필요없이
바로 yarn dev로 로컬호스트3000번 포트가 열린다.

## 정적 라우팅

버전 15.2.0 기준(13버전과 동일)

1. src/app폴더 안에
2. router(경로)명으로 사용할 이름을 폴더명으로 지정
3. 그 안에 파일을 추가한다.

> ❗️반드시 파일명을 page 지정해줘야 적용된다.
> <br />
> 경로: http://localhost:3000/폴더명

> ➕ 중첩 라우팅을 하고 싶다면?
> <br />
> 폴더 안에 폴더를 추가하고 그 안에 page 파일을 생성하면 된다.
> <br />
> 경로: http://localhost:3000/폴더명/폴더명

## 동적 라우팅

1. src/app폴더 안에
2. router(경로)명으로 사용할 이름을 폴더명으로 지정
3. 그 안에 폴더를 추가해주는데 이게 리액트에서 동적라우팅할 때의 /:id 이 부분이다.
   해당 폴더명을 []대괄호로 감싸고 그 안에 page.tsx 파일을 추가한다.
4. products/하위의 어떤 이름을 입력해도 [slug]폴더 하위의 page.tsx가 화면에 보여진다.

> ❗️동적라우팅 폴더명은 [id], [item] 등 어떤걸 해도 상관없으나 통상적으로 [slug]를 많이 사용한다.

### 정적 매개변수 생성

동적 라우팅은 로딩이 좀 걸리므로
미리 페이지명 몇가지를 지정해서 일부 동적페이지도 미리 생성되게 처리할 수 있다.
generateStaticParams 라고 Next에서 지정한 함수명을 사용한다.

> ❓ 무슨차이냐

1. 동적인 페이지라서 렌더링 시 HTML 생성(동적라우팅이라서 어떤 페이지명이 들어올지 모르기 때문에 미리 준비해두지 않은 상태)

```tsx
type Props = {
  params: {
    slug: string;
  };
};
const DynamicRouter = ({ params }: Props) => {
  return <div>{params.slug} 제품설명페이지</div>;
};
export default DynamicRouter;
```

2. 렌더링 시간을 줄이기 위해 미리 특정 페이지명을 지정해두고 HTML을 빌드할 때 미리 만들어두는 것(아래 예시는 "pants", "skirt"경로에 한해서 미리 생성)

```tsx
// 정적 매개변수 생성
// 이 기능은 동적 경로 세그먼트generateStaticParams 와 함께 사용하여
// 요청 시점에 주문형으로 생성하는 대신 빌드 시점에 정적으로 경로를 생성
export async function generateStaticParams() {
  const products = ["pants", "skirt"];

  return products.map((product) => ({
    slug: product,
  }));
}
```
