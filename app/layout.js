import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Providers from "./redux/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqaiya | All Duas Collection",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen xl:p-8 relative overflow-hidden">
            {/* Sidebar on the left */}
            <div>
              <Sidebar />
            </div>
            {/* Navbar at the top */}
            <div className="flex flex-col flex-1">
              <div>
                <Navbar />
              </div>
              <div className="flex-1 overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
