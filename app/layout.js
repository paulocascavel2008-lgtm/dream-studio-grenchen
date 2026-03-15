import "./globals.css";

export const metadata = {
  title: "Dream Studio Grenchen",
  description: "Dream Studio Grenchen by Paulo Alves",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
