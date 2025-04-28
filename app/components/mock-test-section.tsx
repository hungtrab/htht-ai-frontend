import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function MockTestSection() {
  return (
    <section id="mock-test" className="py-20 bg-orange-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kiểm Tra Kiến Thức</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Luyện tập với các bài thi thử miễn phí để đánh giá hiểu biết và chuẩn bị cho kỳ thi.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="calculus" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-orange-100">
                <TabsTrigger
                  value="calculus"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Giải Tích
                </TabsTrigger>
                <TabsTrigger
                  value="algebra"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Đại Số
                </TabsTrigger>
                <TabsTrigger
                  value="linear-algebra"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Đại Số Tuyến Tính
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="calculus">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Đề Thi Thử Giải Tích</h3>
                      <p className="text-gray-600">
                        Kiểm tra kiến thức về giới hạn, đạo hàm và tích phân với đề thi thử giải tích toàn diện của
                        chúng tôi.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>25 câu hỏi trắc nghiệm</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>5 câu hỏi giải quyết vấn đề</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Phản hồi và giải pháp ngay lập tức</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Thời gian làm bài 90 phút</span>
                        </li>
                      </ul>
                      <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Bắt Đầu Làm Bài</Button>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <h4 className="mb-4 font-medium">Câu Hỏi Mẫu:</h4>
                      <div className="space-y-4">
                        <p>Tìm đạo hàm của hàm số f(x) = x³ - 4x² + 7x - 2.</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">A</span>
                            </div>
                            <span>f'(x) = 3x² - 8x + 7</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">B</span>
                            </div>
                            <span>f'(x) = 3x² - 4x + 7</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">C</span>
                            </div>
                            <span>f'(x) = 3x² - 8x - 2</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">D</span>
                            </div>
                            <span>f'(x) = x³ - 8x + 7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="algebra">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Đề Thi Thử Đại Số</h3>
                      <p className="text-gray-600">
                        Kiểm tra kiến thức về phương trình, hàm số và đa thức với đề thi thử đại số toàn diện của chúng
                        tôi.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>30 câu hỏi trắc nghiệm</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>3 câu hỏi giải quyết vấn đề</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Phản hồi và giải pháp ngay lập tức</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Thời gian làm bài 60 phút</span>
                        </li>
                      </ul>
                      <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Bắt Đầu Làm Bài</Button>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <h4 className="mb-4 font-medium">Câu Hỏi Mẫu:</h4>
                      <div className="space-y-4">
                        <p>Giải phương trình: 2x² - 5x - 3 = 0</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">A</span>
                            </div>
                            <span>x = 3 hoặc x = -1/2</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">B</span>
                            </div>
                            <span>x = -3 hoặc x = 1/2</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">C</span>
                            </div>
                            <span>x = 3 hoặc x = 1/2</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">D</span>
                            </div>
                            <span>x = -3 hoặc x = -1/2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="linear-algebra">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Đề Thi Thử Đại Số Tuyến Tính</h3>
                      <p className="text-gray-600">
                        Kiểm tra kiến thức về vector, ma trận và phép biến đổi tuyến tính với đề thi thử đại số tuyến
                        tính toàn diện của chúng tôi.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>20 câu hỏi trắc nghiệm</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>4 câu hỏi giải quyết vấn đề</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Phản hồi và giải pháp ngay lập tức</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Thời gian làm bài 75 phút</span>
                        </li>
                      </ul>
                      <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Bắt Đầu Làm Bài</Button>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                      <h4 className="mb-4 font-medium">Câu Hỏi Mẫu:</h4>
                      <div className="space-y-4">
                        <p>Tính định thức của ma trận:</p>
                        <div className="mb-4 flex justify-center">
                          <div className="inline-block border-2 border-gray-800 px-4 py-2">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center">3</div>
                              <div className="text-center">1</div>
                              <div className="text-center">2</div>
                              <div className="text-center">4</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">A</span>
                            </div>
                            <span>10</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">B</span>
                            </div>
                            <span>12</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">C</span>
                            </div>
                            <span>8</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                              <span className="text-xs">D</span>
                            </div>
                            <span>14</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
