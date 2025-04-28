import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-amber-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hỗ trợ học tập cho sinh viên <br></br> <span className="text-red-600">HUST</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
  Khám phá các bài giảng, bài thi thử miễn phí cho các học phần tại <span className="text-red-600">HUST</span>, từ đại cương cho đến chuyên ngành.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Khám Phá Môn Học
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Làm Bài Thi Thử
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sinh viên"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sinh viên"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sinh viên"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-600 text-xs font-medium text-white">
                  +997
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Tham gia cùng hơn 1.000 sinh viên đã được hưởng lợi từ các khóa học miễn phí của chúng tôi
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-full bg-amber-100 blur-3xl opacity-70"></div>
              <Image
                src="/images/class_demo.jpg"
                alt="Sinh viên đang học"
                width={800}
                height={800}
                className="relative z-10 rounded-2xl object-cover"
                priority
              /> */}
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
                {/* Lớp nền mờ */}
                <div className="absolute inset-0 rounded-full bg-amber-100 blur-3xl opacity-70"></div>

                {/* Component Image dùng fill */}
                <Image
                  src="/images/class_demo.jpg"
                  alt="Sinh viên đang học"
                  fill // Hoặc layout="fill" cho Next.js cũ
                  // Vẫn dùng object-cover hoặc object-contain tùy ý muốn
                  className="relative z-10 rounded-2xl object-cover"
                  // sizes giúp trình duyệt tải ảnh có kích thước phù hợp
                  sizes="(max-width: 640px) 350px, (max-width: 768px) 400px, (max-width: 1024px) 450px, 500px"
                  priority
                />

              <div className="absolute -right-4 -top-4 z-20 rounded-lg bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p className="text-sm font-medium">Lớp Học Trực Tiếp</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 z-20 rounded-lg bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <p className="text-sm font-medium">100% Miễn Phí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
