import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMA Islam Al Azhar 16 BSB Semarang",
  description: "Website profil frontend SMA Islam Al Azhar 16 BSB Semarang."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
