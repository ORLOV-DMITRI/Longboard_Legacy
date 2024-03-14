import Header from "@/components/modules/header/header";


export function Layout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header/>
      {children}
      <div></div>
    </>
  );
};
