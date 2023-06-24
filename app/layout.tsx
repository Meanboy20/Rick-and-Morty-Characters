import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick and Morty show",
  description: "Full list of characters in Rick and Morty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-purple-700 py-4 px-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-center sm:justify-start">
            <h1 className="text-white text-lg font-bold">
              Rick and Morty Characters
            </h1>
          </div>
          <nav className="mt-4 sm:mt-0">
            {/* Your navigation links go here */}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
