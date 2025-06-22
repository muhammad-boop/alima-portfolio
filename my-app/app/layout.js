import Nav from "@/app/components/navbar/page";
import "./globals.css";
import Footer from "@/app/components/footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Alima Bhaktawar Fatima</title>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
