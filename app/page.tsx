import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CoursesSection from "@/components/courses-section"
// import MockTestSection from "@/components/mock-test-section"
import StorySection from "@/components/story-section"
import AuthSection from "@/components/auth-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <StorySection />
        <AuthSection />
      </main>
      <Footer />
    </div>
  )
}
