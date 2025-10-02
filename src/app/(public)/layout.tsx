import Footer from "./shared/Footer";
import { NavbarLayout } from "./shared/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="fixed z-[9999] top-2 w-full">
        <NavbarLayout />
      </div>
      <main className="min-h-dvh z-0">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
