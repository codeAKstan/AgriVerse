import { Globe, ShieldCheck, Sprout, TrendingUp, Truck, Coins, Users, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() {
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

  return (
    <section className="py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering <span className="text-green-600">Farmers</span> and{" "}
            <span className="text-green-600">Buyers</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Our platform provides powerful tools and features to create a more efficient and transparent agricultural
            marketplace.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <feature.icon className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
