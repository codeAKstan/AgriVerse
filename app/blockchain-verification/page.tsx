import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, FileText, Info, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlockchainVerification() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                  Blockchain <span className="text-green-600">Verification</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  AgriVerse uses Solana blockchain technology to verify the authenticity, origin, and journey of every
                  agricultural product on our platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="#how-it-works">Learn How It Works</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/marketplace">Explore Verified Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Blockchain verification illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How Blockchain Verification Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our blockchain verification system creates an immutable record of each product's journey from farm to
              table.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>1. Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Farmers record key information about their products, including planting date, harvest date, farming
                  practices, and certifications.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>2. Blockchain Recording</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  This information is recorded on the Solana blockchain, creating a permanent, tamper-proof record that
                  cannot be altered or deleted.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>3. Transparent Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Buyers can view the complete history of any product, verifying its authenticity, origin, and journey
                  before making a purchase.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verification Features */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Verification Features</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our blockchain verification system provides multiple layers of trust and transparency.
            </p>
          </div>

          <Tabs defaultValue="origin" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="origin">Origin Verification</TabsTrigger>
              <TabsTrigger value="journey">Journey Tracking</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="origin" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Farm origin verification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Verify Product Origin</h3>
                  <p className="text-muted-foreground mb-6">
                    Every product on AgriVerse includes verified information about its farm of origin, including
                    location, farming practices, and farmer profiles.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Confirm the exact farm location",
                      "Learn about the farmer's background and practices",
                      "View photos and videos of the actual farm",
                      "Access farm certifications and credentials",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="journey" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Product journey tracking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Track Product Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Follow the complete journey of your product from planting and harvesting to packaging and shipping,
                    all verified on the blockchain.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "View planting and harvest dates",
                      "Track processing and packaging information",
                      "Monitor shipping and handling conditions",
                      "Verify temperature and storage conditions during transit",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="certifications" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Certification verification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Verify Certifications</h3>
                  <p className="text-muted-foreground mb-6">
                    All certifications claimed by farmers are verified and recorded on the blockchain, providing
                    indisputable proof of compliance.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Organic certification verification",
                      "Fair Trade compliance confirmation",
                      "Sustainable farming practice validation",
                      "Non-GMO and other specialty certifications",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Verification Demo */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See Verification in Action</h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Experience how blockchain verification works with our interactive demo.
            </p>
          </div>

          <div className="bg-muted rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sample Product: Organic Coffee Beans</h3>
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-4">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">BLOCKCHAIN TRANSACTION</h4>
                    <p className="font-mono text-xs break-all">
                      Transaction ID: 7XB9fGp7sDKHVQJZ9Vu1qFqmEtJ4CeTiNDwmyEXHt8NnpYAp
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Farm</span>
                      <span className="text-sm font-medium">Highland Coffee, Colombia</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Harvest Date</span>
                      <span className="text-sm font-medium">March 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Processing</span>
                      <span className="text-sm font-medium">Washed, Sun-dried</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Certifications</span>
                      <span className="text-sm font-medium">Organic, Fair Trade</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Packaged</span>
                      <span className="text-sm font-medium">March 20, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Listed on AgriVerse</span>
                      <span className="text-sm font-medium">March 25, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Coffee beans sample product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 p-2 rounded-md">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">Blockchain Verified</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View Complete Verification
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Experience Transparent Agriculture
          </h2>
          <p className="mt-4 text-lg text-green-100 md:text-xl max-w-3xl mx-auto">
            Join thousands of farmers and buyers already using AgriVerse's blockchain verification to create a more
            transparent and trustworthy agricultural marketplace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/marketplace">Shop Verified Products</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/farmer-portal">Join as a Farmer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
