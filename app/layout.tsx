import type { Metadata } from "next";
import "./globals.css";
import ThemeBtn from "./components/theme-btn";

export const metadata: Metadata = {
  title: "Steff-Movies",
  description: "Website for movies using NextJs and Framer-motion for filtering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white dark:bg-main-dark">
          <ThemeBtn />
          {children}
        </div>
      </body>
    </html>
  );
}
