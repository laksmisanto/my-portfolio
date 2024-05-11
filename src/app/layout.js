import "./globals.css";

export const metadata = {
  title: "laksmi santo",
  description: "This is my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
