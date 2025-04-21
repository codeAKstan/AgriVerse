"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Globe,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Truck,
  Coins,
  Users,
  BarChart3,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Connecting Farmers to Global Markets"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with buyers and sellers from around the world, expanding your market beyond local boundaries.",
    },
    {
      icon: ShieldCheck,
      title: "Blockchain Verification",
      description: "Every transaction and product is verified on the blockchain, ensuring authenticity and trust.",
    },
    {
      icon: Coins,
      title: "Direct Payments",
      description: "Receive payments directly to your wallet with lower fees and faster processing times.",
    },
    {
      icon: Truck,
      title: "Streamlined Logistics",
      description: "Integrated shipping and logistics solutions to get your products to buyers efficiently.",
    },
    {
      icon: Users,
      title: "Reputation System",
      description: "Build your reputation through verified reviews and ratings from satisfied customers.",
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Access real-time market data and insights to make informed business decisions.",
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description: "Showcase your sustainable farming practices and connect with eco-conscious buyers.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Expand your business with tools designed to help you scale and reach new markets.",
    },
  ]

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Coffee Farmer, Colombia",
      content:
        "AgriVerse has transformed my business. I now sell directly to buyers across the world and earn 40% more than before. The blockchain verification gives my customers confidence in my organic practices.",
      avatar: "MR",
      rating: 5,
    },
    {
      name: "John Mwangi",
      role: "Grain Producer, Kenya",
      content:
        "Before AgriVerse, I was at the mercy of local middlemen. Now I set my own prices and connect with buyers who value quality. The platform is easy to use even with limited internet access.",
      avatar: "JM",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Food Importer, Singapore",
      content:
        "As a buyer, I can now source directly from farmers with complete transparency. The quality is exceptional, and I love being able to trace products back to their origin through blockchain verification.",
      avatar: "SC",
      rating: 4,
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {typedText}
                  {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  AgriVerse is a blockchain-powered marketplace that connects farmers directly with buyers worldwide,
                  eliminating intermediaries and ensuring fair prices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/marketplace">
                    Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/farmer-portal">I'm a Farmer</Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Blockchain Verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Direct Payments</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Global Reach</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Farmers in a field with produce"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="container mx-auto px-4 md:px-6 mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg">
            <div className="text-center stats-item px-4">
              <p className="text-3xl font-bold text-primary">10K+</p>
              <p className="text-sm text-muted-foreground">Farmers</p>
            </div>
            <div className="text-center stats-item px-4">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center stats-item px-4">
              <p className="text-3xl font-bold text-primary">$2M+</p>
              <p className="text-sm text-muted-foreground">Trade Volume</p>
            </div>
            <div className="text-center stats-item px-4">
              <p className="text-3xl font-bold text-primary">30%</p>
              <p className="text-sm text-muted-foreground">Higher Earnings</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowering <span className="text-primary">Farmers</span> and <span className="text-primary">Buyers</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our platform provides powerful tools and features to create a more efficient and transparent agricultural
              marketplace.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="feature-card border-none h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Products</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Discover high-quality agricultural products from verified farmers
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/marketplace">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Organic Apples",
                farm: "Green Valley Farms",
                price: 2.99,
                unit: "lb",
                image: "/placeholder.svg?height=300&width=300",
                badges: ["organic", "verified"],
              },
              {
                name: "Premium Rice",
                farm: "Golden Grain Co.",
                price: 4.5,
                unit: "kg",
                image: "/placeholder.svg?height=300&width=300",
                badges: ["verified", "new"],
              },
              {
                name: "Specialty Coffee",
                farm: "Highland Coffee",
                price: 12.99,
                unit: "lb",
                image: "/placeholder.svg?height=300&width=300",
                badges: ["organic", "sale"],
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="product-card border-none overflow-hidden h-full">
                  <div className="relative aspect-square">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {product.badges.includes("organic") && <Badge className="badge-organic">Organic</Badge>}
                      {product.badges.includes("verified") && <Badge className="badge-verified">Verified</Badge>}
                      {product.badges.includes("new") && <Badge className="badge-new">New</Badge>}
                      {product.badges.includes("sale") && <Badge className="badge-sale">Sale</Badge>}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-muted-foreground text-sm">{product.farm}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">4.8</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-lg">
                        ${product.price}/{product.unit}
                      </p>
                      <Button asChild size="sm" className="rounded-full">
                        <Link href={`/marketplace/product/${index + 1}`}>View</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Hear from farmers and buyers who have transformed their businesses with AgriVerse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="testimonial-card border-none h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center text-primary font-medium">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Agriculture?
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Join thousands of farmers and buyers already using AgriVerse to create a more efficient and fair
              agricultural marketplace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/marketplace">Start Buying</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
                <Link href="/farmer-portal">Start Selling</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
