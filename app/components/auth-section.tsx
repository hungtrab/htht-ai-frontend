"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section id="auth" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tham Gia Cộng Đồng</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tạo tài khoản để truy cập tất cả các khóa học miễn phí, đề thi thử và tài liệu học tập của chúng tôi.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-orange-100">
              <TabsTrigger value="login" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Đăng Nhập
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Đăng Ký
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Đăng Nhập</CardTitle>
                  <CardDescription>Nhập thông tin đăng nhập để truy cập tài khoản của bạn.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email-login">Email</Label>
                        <Input id="email-login" type="email" placeholder="m@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password-login">Mật Khẩu</Label>
                          <Button variant="link" className="h-auto p-0 text-sm text-orange-600">
                            Quên mật khẩu?
                          </Button>
                        </div>
                        <Input id="password-login" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
                        {isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-gray-600">
                    Chưa có tài khoản?{" "}
                    <Button variant="link" className="h-auto p-0 text-orange-600">
                      Đăng ký
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Đăng Ký</CardTitle>
                  <CardDescription>Tạo tài khoản để truy cập tất cả tài nguyên của chúng tôi.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Họ Tên</Label>
                        <Input id="name" type="text" placeholder="Nguyễn Văn A" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-signup">Email</Label>
                        <Input id="email-signup" type="email" placeholder="m@example.com" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-signup">Mật Khẩu</Label>
                        <Input id="password-signup" type="password" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Xác Nhận Mật Khẩu</Label>
                        <Input id="confirm-password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
                        {isLoading ? "Đang tạo tài khoản..." : "Đăng Ký"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-gray-600">
                    Đã có tài khoản?{" "}
                    <Button variant="link" className="h-auto p-0 text-orange-600">
                      Đăng nhập
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
