import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/images.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
