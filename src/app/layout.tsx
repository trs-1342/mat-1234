import "./globals.css";

export const metadata = {
  title: "Matematik I - 60 Günlük Program",
  description: "bu site 60 gün içinde matematik öğrenme sürecinde plana bakarak ilerlemenizi sağlar ve hangi konuları işleyeceğinizi gösterir.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
