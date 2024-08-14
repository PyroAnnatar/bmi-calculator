import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid place-items-center h-screen bg-sky-700">
        {children}
      </body>
    </html>
  );
}
