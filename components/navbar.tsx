"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/club-logo.png"
            alt="CLB Hỗ Trợ Học Tập Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-amber-600">CLB Hỗ trợ Học tập Bách khoa</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#courses" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Khóa Học
          </Link>
          <Link href="#mock-test" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Đề Thi Thử
          </Link>
          <Link href="#story" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Câu Chuyện
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Liên Hệ
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Đăng Nhập
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700">Đăng Ký</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
          <div className="container flex flex-col gap-4 p-4">
            <Link
              href="#courses"
              className="text-sm font-medium p-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Khóa Học
            </Link>
            <Link
              href="#mock-test"
              className="text-sm font-medium p-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Đề Thi Thử
            </Link>
            <Link
              href="#story"
              className="text-sm font-medium p-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Câu Chuyện
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium p-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên Hệ
            </Link>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 w-full">
                Đăng Nhập
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700 w-full">Đăng Ký</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
