interface ProductDetailsLayoutProps {
  children: React.ReactNode;
}

export default function ProductDetailsLayout({
  children,
}: ProductDetailsLayoutProps) {
  return (
    <>
      {children}
      <div>Dynamic id page</div>
    </>
  );
}
