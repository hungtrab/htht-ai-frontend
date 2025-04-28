"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Liên Hệ</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Có câu hỏi hoặc muốn tham gia làm tình nguyện viên? Chúng tôi rất muốn nghe từ bạn.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-600" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <a href="mailto:info@clbhotro.org" className="hover:text-orange-600">
                  info@clbhotro.org
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">Chúng tôi sẽ phản hồi trong vòng 24 giờ</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-600" />
                Điện Thoại
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-orange-600">
                  +84 (234) 567-890
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">Thứ 2-6, 9h-17h</p>
            </CardContent>
          </Card>

          <Card className="bg-white md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-600" />
                Địa Chỉ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Đại học Bách Khoa Hà Nội, Hà Nội, Việt Nam</p>
              <p className="text-sm text-gray-500 mt-1">Tòa nhà 3, Phòng 201</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Gửi Tin Nhắn</CardTitle>
              <CardDescription>
                Điền vào mẫu dưới đây và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Họ Tên</Label>
                  <Input id="name" placeholder="Họ tên của bạn" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email của bạn" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Tiêu Đề</Label>
                  <Input id="subject" placeholder="Tiêu đề tin nhắn" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Tin Nhắn</Label>
                  <Textarea id="message" placeholder="Nội dung tin nhắn" className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
                  {isSubmitting ? "Đang gửi..." : "Gửi Tin Nhắn"}
                </Button>
                {isSuccess && (
                  <div className="rounded-md bg-green-50 p-4 text-sm text-green-600">
                    Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm!
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
