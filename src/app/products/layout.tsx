import Link from "next/link";
import "../globals.css";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="products-nav">
        <Link href="/women">여성옷</Link>
        <Link href="man">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
