import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "DocWorx AI — Partner with us",
  description: "AI agents that increase revenue and reduce cost of revenue collection for healthcare organizations. Integrate with DocWorx AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
