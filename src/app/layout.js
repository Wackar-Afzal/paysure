import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "PaySure",
  description: "SimplifyingMedica l Billing with Accuracy & Trust. At PaySure, we streamline your medical billing process, ensuring precision, compliance, and fast reimbursements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
