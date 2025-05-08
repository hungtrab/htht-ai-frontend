'use client';

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CoursesSection from "@/components/courses-section"
// import MockTestSection from "@/components/mock-test-section"
import StorySection from "@/components/story-section"
import AuthSection from "@/components/auth-section"
import Footer from "@/components/footer"
import { useState, useEffect } from 'react';

interface Course {
  id: number;
  name: string;
}

export default function Home() {
  const [backendCourses, setBackendCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Hàm để gọi API
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        // Địa chỉ API của backend NestJS
        const response = await fetch('http://localhost:8080/api/courses');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Course[] = await response.json();
        setBackendCourses(data);
      } catch (e: any) {
        console.error("Failed to fetch courses:", e);
        setError(`Không thể tải khóa học từ server: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses(); // Gọi hàm khi component mount
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy 1 lần sau khi mount

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />

        {/* Hiển thị trạng thái loading hoặc lỗi */}
        {loading && <p className="text-center py-8">Đang tải dữ liệu khóa học từ server...</p>}
        {error && <p className="text-center py-8 text-red-600">{error}</p>}

        {/* Hiển thị dữ liệu lấy từ backend nếu thành công */}
        {!loading && !error && backendCourses.length > 0 && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-green-100 my-8 rounded">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-4">Dữ liệu từ Backend:</h2>
            <ul className="list-disc list-inside text-center">
              {backendCourses.map(course => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
          </div>
        )}

        <CoursesSection />
        <StorySection />
        <AuthSection />
      </main>
    </div>
  )
}
