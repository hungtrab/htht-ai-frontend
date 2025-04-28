import Navbar from "@/app/components/navbar"
import HeroSection from "@/app/components/hero-section"
import CoursesSection from "@/app/components/courses-section"
import MockTestSection from "@/app/components/mock-test-section"
import StorySection from "@/app/components/story-section"
import AuthSection from "@/app/components/auth-section"
import ContactSection from "@/app/components/contact-section"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <MockTestSection />
        <StorySection />
        <AuthSection />
      </main>
      <Footer />
    </div>
  )
}
