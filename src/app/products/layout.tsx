import "../globals.css";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="products-nav">
        <a href="">pants</a>
        <a href="">skirt</a>
      </nav>
      <section>{children}</section>
    </>
  );
}
