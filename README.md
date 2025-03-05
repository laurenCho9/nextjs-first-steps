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

버전 15.2.0 기준

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
