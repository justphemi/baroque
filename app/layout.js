"use client"

import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Bvbot from "@/components/assistant"

import Image from "next/image"
import Link from "next/link"
import { SendIcon } from "lucide-react"

import "./globals.css"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const metadata = {
  title: "Baroque Variations Limited",
  description:
    "Leading consultancy firm providing training, engineering, manufacturing, trading, and general services across Nigeria and beyond."
}

export default function RootLayout({ children }) {

  const [message, setMessage] = useState("")
  const [showInput, setShowInput] = useState(false)

  const encodedMessage = encodeURIComponent(message)
  const whatsappLink = `https://wa.me/2349151213285?text=${encodedMessage}`

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {!showInput &&
            <div className="fixed bottom-12 right-0 z-50">
          <Bvbot />
        </div>
        }

      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setShowInput(!showInput)}
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/wbusiness.png"
            alt="Chat with us on WhatsApp"
            width={60}
            height={60}
            className="bg-white p-[-2px] rounded-full drop-shadow-lg"
          />
        </button>
        
        {showInput && (
          <div
            className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg animate-bounce-in"
            style={{ animationDuration: "300ms" }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="outline-none bg-transparent text-sm w-40"
            />
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-full text-[9px]"
            >
              <SendIcon/>
            </Link>
          </div>
        )}

      </div>
      
      {children}
      
      </main>
        <Footer />
      </body>
    </html>
  )
}
