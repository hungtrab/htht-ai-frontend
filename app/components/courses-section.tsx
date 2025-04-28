import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Clock, ArrowRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Giải Tích I",
    description: "Học các kiến thức cơ bản về giải tích bao gồm giới hạn, đạo hàm và tích phân.",
    image: "/placeholder.svg?height=200&width=300",
    students: 350,
    lessons: 24,
    duration: "8 tuần",
    level: "Cơ bản",
  },
  {
    id: 2,
    title: "Giải Tích II",
    description: "Kỹ thuật tích phân nâng cao, chuỗi số, chuỗi hàm và phương trình tham số.",
    image: "/placeholder.svg?height=200&width=300",
    students: 280,
    lessons: 28,
    duration: "10 tuần",
    level: "Trung cấp",
  },
  {
    id: 3,
    title: "Đại Số Tuyến Tính",
    description: "Nghiên cứu về vector, ma trận, phép biến đổi tuyến tính và hệ phương trình.",
    image: "/placeholder.svg?height=200&width=300",
    students: 210,
    lessons: 20,
    duration: "8 tuần",
    level: "Trung cấp",
  },
  {
    id: 4,
    title: "Đại Số Cơ Bản",
    description: "Nắm vững kiến thức cơ bản về đại số bao gồm phương trình, hàm số và đa thức.",
    image: "/placeholder.svg?height=200&width=300",
    students: 420,
    lessons: 18,
    duration: "6 tuần",
    level: "Cơ bản",
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-orange-200 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Khóa Học
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Khóa Học Toán Miễn Phí</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Khám phá các khóa học toán học toàn diện được giảng dạy bởi các giảng viên tình nguyện có kinh nghiệm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-orange-600">{course.level}</Badge>
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{course.students} sinh viên</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span>{course.lessons} bài học</span>
                  </div>
                  <div className="flex items-center gap-1 col-span-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Đăng Ký Ngay
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
            Xem Tất Cả Khóa Học
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
