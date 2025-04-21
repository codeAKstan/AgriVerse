"use client"

import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Set up your farm or buyer profile with verification through blockchain technology.",
      forFarmers: "Showcase your farm's story, practices, and certifications.",
      forBuyers: "Build your buyer profile to connect with verified farmers.",
    },
    {
      number: "02",
      title: "List or Browse Products",
      description: "Farmers list products while buyers browse the global marketplace.",
      forFarmers: "Add product details, photos, pricing, and available quantities.",
      forBuyers: "Search, filter, and find the exact agricultural products you need.",
    },
    {
      number: "03",
      title: "Secure Transactions",
      description: "Complete transactions securely through our blockchain-powered system.",
      forFarmers: "Receive direct payments to your wallet with lower fees.",
      forBuyers: "Pay securely with cryptocurrency or traditional payment methods.",
    },
    {
      number: "04",
      title: "Shipping & Delivery",
      description: "Arrange shipping and track deliveries from farm to destination.",
      forFarmers: "Manage shipping arrangements with our logistics partners.",
      forBuyers: "Track your order from the farm to your doorstep in real-time.",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How AgriVerse Works</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Our platform makes it easy to connect farmers with buyers through a simple, secure process.
          </p>
        </motion.div>

        <div className="grid gap-12 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`order-2 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={`Step ${step.number}: ${step.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`order-1 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">For Farmers</p>
                      <p className="text-sm text-muted-foreground">{step.forFarmers}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">For Buyers</p>
                      <p className="text-sm text-muted-foreground">{step.forBuyers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {steps.map((step, index) =>
            index < steps.length - 1 ? (
              <motion.div
                key={`arrow-${index}`}
                className="flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ArrowRight className="h-8 w-8 text-primary" />
              </motion.div>
            ) : null,
          )}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/marketplace">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
