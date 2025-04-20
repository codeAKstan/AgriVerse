import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import FeaturesSection from "@/components/features-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                  Connecting Farmers to <span className="text-green-600">Global Markets</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  AgriVerse is a blockchain-powered marketplace that connects farmers directly with buyers worldwide,
                  eliminating intermediaries and ensuring fair prices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/marketplace">
                    Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/farmer-portal">I'm a Farmer</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Blockchain Verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Direct Payments</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Farmers in a field with produce"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container px-4 md:px-6 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-xl bg-white p-6 shadow-lg">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">10K+</p>
              <p className="text-sm text-muted-foreground">Farmers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">50+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">$2M+</p>
              <p className="text-sm text-muted-foreground">Trade Volume</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">30%</p>
              <p className="text-sm text-muted-foreground">Higher Earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-green-600 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Ready to Transform Agriculture?
          </h2>
          <p className="mt-4 text-lg text-green-100 md:text-xl max-w-3xl mx-auto">
            Join thousands of farmers and buyers already using AgriVerse to create a more efficient and fair
            agricultural marketplace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/marketplace">Start Buying</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/farmer-portal">Start Selling</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
