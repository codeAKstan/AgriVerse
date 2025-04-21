import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Globe, Heart, ShieldCheck, Sprout } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                  About <span className="text-green-600">AgriVerse</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  We're building a more transparent, efficient, and fair agricultural marketplace using blockchain
                  technology.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Farmers working in a field"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              AgriVerse is on a mission to transform agriculture by connecting farmers directly with buyers worldwide,
              eliminating intermediaries, and ensuring fair prices through blockchain technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Global Access</h3>
                <p className="text-center text-muted-foreground">
                  Breaking down geographical barriers to connect farmers with a global marketplace, expanding their
                  customer base beyond local boundaries.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Transparency</h3>
                <p className="text-center text-muted-foreground">
                  Using blockchain technology to create an immutable record of each product's journey, ensuring complete
                  transparency and trust.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Fair Compensation</h3>
                <p className="text-center text-muted-foreground">
                  Eliminating unnecessary intermediaries to ensure farmers receive fair prices for their products and
                  labor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AgriVerse founders"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                AgriVerse was founded in 2022 by a team of agricultural experts, blockchain developers, and global trade
                specialists who recognized the inefficiencies and inequities in traditional agricultural supply chains.
              </p>
              <p className="text-muted-foreground mb-4">
                After witnessing farmers receive only a fraction of the final retail price for their products, our
                founders set out to create a more direct and transparent marketplace that would benefit both producers
                and consumers.
              </p>
              <p className="text-muted-foreground mb-6">
                By leveraging the power of blockchain technology and the Solana network, we've built a platform that
                eliminates unnecessary intermediaries, verifies product authenticity, and creates a more efficient and
                equitable agricultural ecosystem.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>Founded by experts in agriculture, blockchain, and global trade</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>Launched in 2022 with a mission to transform agricultural commerce</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>Now connecting thousands of farmers with buyers in over 50 countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              The core principles that guide everything we do at AgriVerse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="p-2 bg-green-100 rounded-full h-fit">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We prioritize sustainable farming practices and environmentally responsible operations throughout our
                  platform and supply chain.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-green-100 rounded-full h-fit">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of honesty, transparency, and ethical conduct in all our
                  interactions and operations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-green-100 rounded-full h-fit">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We design our platform to be accessible to farmers of all backgrounds, regardless of technical
                  expertise or geographic location.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-green-100 rounded-full h-fit">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community of farmers, buyers, and partners working together to transform
                  agriculture for the better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Meet the passionate individuals behind AgriVerse who are working to transform agriculture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "CEO & Co-Founder",
                bio: "Agricultural economist with 15+ years of experience in global food systems.",
              },
              {
                name: "David Chen",
                role: "CTO & Co-Founder",
                bio: "Blockchain developer and architect with expertise in decentralized applications.",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Farmer Relations",
                bio: "Former farmer and agricultural extension officer dedicated to supporting producers.",
              },
              {
                name: "Michael Okonkwo",
                role: "Head of Global Markets",
                bio: "International trade specialist with experience in 30+ countries.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src={`/placeholder.svg?height=128&width=128`}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">{member.name}</h3>
                    <p className="text-green-600 text-center mb-2">{member.role}</p>
                    <p className="text-center text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Join the Agricultural Revolution
          </h2>
          <p className="mt-4 text-lg text-green-100 md:text-xl max-w-3xl mx-auto">
            Be part of our mission to create a more transparent, efficient, and equitable agricultural marketplace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/marketplace">
                Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
