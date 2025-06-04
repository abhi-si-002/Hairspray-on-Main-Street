import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Scissors, Sparkles, Clock, MapPin, Phone, Facebook, Instagram, Twitter, PhoneIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SalonLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Scissors className="h-6 w-6 text-purple-600" /> */}
            <span className="text-xl font-bold text-gray-900">Hairspray on Main Street</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="hidden sm:block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
            Book Now
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-5xl text-gray-900">
                    Transform Your Look at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Hairspray on Main Street</span>
                  </h1>
                  <p className="text-lg text-gray-600 md:text-xl max-w-2xl">
                    Experience luxury hair care and styling with our expert stylists. From cuts to colors, we will help
                    you look and feel your absolute best.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                    Book Appointment
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    View Services
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Open 7 Days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Fort Wayne, IN</span>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <Image
                  src="https://static.wixstatic.com/media/4ea72d_2747161688e6493f8ec97c82fbd2304a~mv2.jpg/v1/crop/x_503,y_0,w_2497,h_1323/fill/w_1466,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PAN1_edited.jpg"
                  alt="Salon interior"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">500+ Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center mx-auto">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 font-medium">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                    Your Beauty Destination
                  </h2>
                  <p className="text-lg text-gray-600">
                    At Hairspray on Main Street, we are dedicated to making you look and feel beautiful. Our team
                    of certified stylists combines creativity with the latest techniques to deliver exceptional results.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-gray-900">Expert Stylists</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our certified professionals stay updated with the latest trends and techniques.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Scissors className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-gray-900">Premium Products</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      We use only the finest hair care products from top brands worldwide.
                    </p>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">Learn More About Us</Button>
              </div>

              <div className="relative flex justify-center items-center">
                <Image
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4no5thHqLDIhUPy7Dta74kD4M4z4b7Hf2s2E52SDSYs_MxqldOtkVmaoR1zXmbXKb1B8vINC6SnqHkwbmb8OBqoteU7tYdD4eMTcsSqYdQpux1-fNx5cbTDVGtFwLT-wBklyv2Lc=s1360-w1360-h1020-rw"
                  alt="Salon team"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 font-medium">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                Complete Beauty Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From classic cuts to modern styling, we offer a full range of services to meet all your beauty needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Hair Cuts & Styling",
                  description: "Professional cuts and styling for all hair types and lengths.",
                  price: "Starting at $45",
                  image: "https://lh3.googleusercontent.com/p/AF1QipO_jAy-HxSh_RU2oh0AL-jcPgIUZp2G97e4uTa3=s1360-w1360-h1020-rw",
                },
                {
                  title: "Hair Coloring",
                  description: "Full color, highlights, balayage, and color correction services.",
                  price: "Starting at $85",
                  image: "https://lh3.googleusercontent.com/p/AF1QipNUDfDgQ_YxyY16UrbhYVhsYsWipTNegxdqqyVf=s1360-w1360-h1020-rw",
                },
                {
                  title: "Hair Treatments",
                  description: "Deep conditioning, keratin treatments, and hair repair services.",
                  price: "Starting at $65",
                  image: "https://lh3.googleusercontent.com/p/AF1QipO8SZfd8sgQ2FRxvsS4dd17ZlKfcRknyPJ4KQS2=s1360-w1360-h1020-rw",
                },
              ].map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 flex justify-center items-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-purple-600">{service.price}</span>
                      <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 font-medium">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Do not just take our word for it. Here is what our satisfied customers have to say about their experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Regular Client",
                  content:
                    "Absolutely love coming here! The stylists are so talented and always know exactly what I want. My hair has never looked better!",
                  rating: 5,
                },
                {
                  name: "Emily Chen",
                  role: "Bride",
                  content:
                    "They did my wedding hair and it was perfect! The team was professional, punctual, and made me feel like a princess on my special day.",
                  rating: 5,
                },
                {
                  name: "Jessica Taylor",
                  role: "New Client",
                  content:
                    "Found this salon through a friend's recommendation and I'm so glad I did! The atmosphere is relaxing and the results speak for themselves.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                        {testimonial.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 to-pink-500">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                Ready for Your Hair Transformation?
              </h2>
              <p className="text-lg text-purple-100">
                Book your appointment today and let our expert stylists help you achieve the look you have always wanted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Book Appointment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 flex items-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 260-385-5707
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scissors className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Hairspray on Main Street</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your premier destination for luxury hair care and styling. Transforming looks and boosting confidence
                since 2009.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/hairsprayonmain" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/wix" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hair Cuts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hair Coloring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hair Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Special Events
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">Fort Wayne, IN</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">+1 260-385-5707</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">Open 7 Days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Hairspray on Main Street. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
