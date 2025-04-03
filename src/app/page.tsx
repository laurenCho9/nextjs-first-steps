import { Counter } from "@/components/Counter";
import os from "os"; // 노드 APIs

export default function Home() {
  console.log("안녕?");
  console.log(os.hostname());

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        홈페이지 메인 ❗️
      </div>
      <Counter />
    </>
  );
}
