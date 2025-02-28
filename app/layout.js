// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import UserProvider from './context/user'
import CartProvider from './context/cart'
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ebay",
  description: "Ebay clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <UserProvider>
            <CartProvider>
              {children}
            </CartProvider>
        </UserProvider>
        
      </body>
    </html>
  );
}
