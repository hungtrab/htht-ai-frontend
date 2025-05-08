import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from 'next/link'

interface Course {
    id: string;
    title: string;
    slug: string;
    credits: number | null;
    weight: number | null; // Enum sẽ được trả về dưới dạng giá trị số/string từ JSON
    description: string | null;
    thumbnailUrl: string | null;
}

// Hàm fetch dữ liệu phía server
async function getCourses(): Promise<Course[]> {
    try {
        // Gọi trực tiếp API backend
        // Lưu ý: Trong môi trường production, đây có thể là internal URL hoặc tên service nếu deploy cùng hạ tầng
        const res = await fetch('http://localhost:8080/api/courses', {
            cache: 'no-store' // Không cache để luôn lấy dữ liệu mới nhất khi phát triển
            // next: { revalidate: 60 } // Hoặc revalidate sau mỗi 60s
        });

        if (!res.ok) {
            // Log lỗi phía server
            console.error(`Failed to fetch courses: ${res.status} ${res.statusText}`);
            // Ném lỗi để Next.js có thể xử lý (ví dụ: hiển thị trang lỗi)
            throw new Error('Failed to fetch courses from backend');
        }

        const data: Course[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error in getCourses:', error);
        // Ném lại lỗi hoặc trả về mảng rỗng để trang không bị crash hoàn toàn
        // throw error;
        return []; // Trả về mảng rỗng để trang có thể render
    }
}


// Server Component
export default async function CoursesPage() {
    const courses = await getCourses();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                Danh Sách Khóa Học
            </h1>

            {courses.length === 0 ? (
                <p className="text-center text-gray-600">Không tải được danh sách khóa học hoặc chưa có khóa học nào.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                            {/* Optional Thumbnail */}
                            {course.thumbnailUrl ? (
                                <img src={course.thumbnailUrl} alt={course.title} className="h-40 w-full object-cover" />
                            ) : (
                                <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                            )}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-600">
                                    <Link href={`/khoa-hoc/${course.slug}`}>
                                        {course.title} ({course.id})
                                    </Link>
                                </h2>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{course.description || 'Chưa có mô tả.'}</p>
                                <div className="text-xs text-gray-500 flex justify-between items-center border-t pt-2">
                                    <span>Tín chỉ: {course.credits ?? 'N/A'}</span>
                                    <span>Hệ số: {course.weight ?? 'N/A'}</span>
                                </div>
                                {/* Thêm nút xem chi tiết nếu cần */}
                                {/* <Link href={`/khoa-hoc/${course.slug}`} className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded text-sm font-medium">
                     Xem chi tiết
                   </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}