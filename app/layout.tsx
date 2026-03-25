export const metadata = {
  title: "Klient Audit",
  description: "SaaS aplikácia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
