import "./globals.css";

export const metadata = {
  title: "Saiyan Legacy",
  description: "Site fan Dragon Ball",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}