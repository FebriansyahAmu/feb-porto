import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/writeline.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
