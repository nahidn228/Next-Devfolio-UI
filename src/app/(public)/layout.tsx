import Footer from "./shared/Footer";
import { NavbarPicSeek } from "./shared/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="sticky top-2 w-full">
        <NavbarPicSeek />
      </div>
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
