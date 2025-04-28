import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Award } from "lucide-react"

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <Badge
              variant="outline"
              className="w-fit border-orange-200 bg-orange-100 text-orange-800 hover:bg-orange-100"
            >
              Câu Chuyện
            </Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trao Quyền Thông Qua Giáo Dục Miễn Phí
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                Chúng tôi bắt đầu như một nhóm nhỏ những người đam mê toán học tại HUST, những người tin rằng giáo dục
                chất lượng nên được tiếp cận bởi tất cả mọi người, bất kể hoàn cảnh tài chính.
              </p>
            </div>
            <p className="max-w-[600px] text-gray-600">
              Những gì bắt đầu như các buổi học nhóm không chính thức nhanh chóng phát triển thành các khóa học có cấu
              trúc khi ngày càng nhiều sinh viên tìm kiếm sự giúp đỡ của chúng tôi. Các giảng viên tình nguyện của chúng
              tôi đều đam mê toán học và tận tâm giúp đỡ người khác thành công.
            </p>
            <p className="max-w-[600px] text-gray-600">
              Hiện nay, chúng tôi đã dạy hơn 1.000 sinh viên thông qua các khóa học giải tích và đại số miễn phí, và
              chúng tôi đang mở rộng các khóa học để tiếp cận nhiều học viên hơn trực tuyến.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-orange-600 hover:bg-orange-700">Tham Gia Sứ Mệnh</Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Trở Thành Tình Nguyện Viên
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative grid gap-6 sm:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Sinh viên trong lớp học"
                    width={300}
                    height={200}
                    className="aspect-[3/2] object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden sm:mt-10">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Giáo viên tình nguyện"
                    width={300}
                    height={200}
                    className="aspect-[3/2] object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Buổi học nhóm"
                    width={300}
                    height={200}
                    className="aspect-[3/2] object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden sm:mt-10">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Lễ tốt nghiệp"
                    width={300}
                    height={200}
                    className="aspect-[3/2] object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Heart className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sứ Mệnh</h3>
              <p className="text-gray-600">
                Cung cấp giáo dục toán học miễn phí, chất lượng cao cho bất kỳ ai muốn học.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">1.000+ Sinh Viên</h3>
              <p className="text-gray-600">
                Chúng tôi đã giúp hơn một nghìn sinh viên tại HUST thành công trong toán học.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">4 Khóa Học</h3>
              <p className="text-gray-600">
                Các khóa học toàn diện về giải tích và đại số được giảng dạy bởi các tình nguyện viên đầy nhiệt huyết.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Miễn Phí</h3>
              <p className="text-gray-600">
                Tất cả các khóa học và tài nguyên của chúng tôi đều hoàn toàn miễn phí cho mọi người.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
