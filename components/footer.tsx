import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/club-logo.png"
                alt="CLB Hỗ Trợ Học Tập Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-orange-500">CLB Hỗ Trợ Học Tập</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Trao quyền cho sinh viên thông qua giáo dục toán học chất lượng cao miễn phí từ năm 2020.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-orange-500">
                  Khóa Học
                </Link>
              </li>
              <li>
                <Link href="#mock-test" className="text-gray-400 hover:text-orange-500">
                  Đề Thi Thử
                </Link>
              </li>
              <li>
                <Link href="#story" className="text-gray-400 hover:text-orange-500">
                  Câu Chuyện
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-orange-500">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Tình Nguyện Viên
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tài Nguyên</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Tài Liệu Học Tập
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Video Hướng Dẫn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Bài Tập Thực Hành
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Câu Hỏi Thường Gặp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Đăng Ký</h3>
            <p className="text-gray-400">
              Đăng ký nhận bản tin của chúng tôi để cập nhật về các khóa học và sự kiện mới.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-gray-800 border-gray-700 text-gray-200 focus:border-orange-500"
              />
              <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Đăng ký</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CLB Hỗ Trợ Học Tập. Tất cả các quyền được bảo lưu.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:text-orange-500">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#" className="hover:text-orange-500">
              Điều Khoản Dịch Vụ
            </Link>
            <Link href="#" className="hover:text-orange-500">
              Chính Sách Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
