import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Check,
  Heart,
  MessageSquare,
  Minus,
  Plus,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProductDetail({ params }) {
  const productId = params.id

  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/marketplace">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border">
              <Image src="/placeholder.svg?height=600&width=600" alt="Product image" fill className="object-cover" />
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 rounded-full">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={`Product image ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Organic</Badge>
                <Badge variant="outline" className="border-green-500 text-green-600">
                  Verified
                </Badge>
              </div>
              <h1 className="text-3xl font-bold">Organic Apples</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.0 (24 reviews)</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$2.99</span>
                <span className="text-lg">/lb</span>
                <span className="text-sm text-muted-foreground line-through ml-2">$3.49/lb</span>
              </div>
              <p className="text-sm text-green-600 mt-1">Save 15% when you buy 5+ lbs</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">
                Fresh, crisp organic apples grown using sustainable farming practices. These apples are harvested at
                peak ripeness to ensure the best flavor and nutritional value. Perfect for snacking, baking, or adding
                to your favorite recipes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm">Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm">Ships in 1-2 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-sm">Pesticide-free</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-sm">Non-GMO</span>
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-12 text-center">2</span>
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">250 lbs available</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Farmer
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>GV</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Green Valley Farms</h3>
                  <p className="text-sm text-muted-foreground">California, USA</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="details"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="origin"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Origin & Traceability
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Reviews (24)
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Shipping & Returns
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Product Specifications</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Variety</span>
                    <span>Honeycrisp</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Growing Method</span>
                    <span>Organic</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Harvest Date</span>
                    <span>September 2022</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Size</span>
                    <span>Medium to Large</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Taste Profile</span>
                    <span>Sweet with slight tartness</span>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <span className="text-muted-foreground">Storage</span>
                    <span>Refrigerate for up to 3 weeks</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Nutritional Information</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Serving Size</span>
                    <span>1 medium apple (182g)</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Calories</span>
                    <span>95</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Total Carbohydrates</span>
                    <span>25g</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Dietary Fiber</span>
                    <span>4g</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="text-muted-foreground">Sugars</span>
                    <span>19g</span>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <span className="text-muted-foreground">Vitamin C</span>
                    <span>14% of Daily Value</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="origin" className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Farm Information</h3>
                <p className="text-muted-foreground mb-4">
                  Green Valley Farms is a family-owned organic farm located in the lush valleys of California. They have
                  been growing apples using sustainable farming practices for over 25 years.
                </p>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=300&width=500" alt="Farm image" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    Organic Certified
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    Sustainable Practices
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Blockchain Verification</h3>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium">Verified on Solana Blockchain</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    This product's journey from farm to marketplace has been recorded on the Solana blockchain, ensuring
                    transparency and authenticity.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-background rounded p-2 text-sm">
                      <p className="font-mono text-xs break-all">
                        Transaction ID: 4Gp7sDKHVQJZ9Vu1qFqmEtJ4CeTiNDwmyEXHt8NnpYAp
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Blockchain Record
                    </Button>
                  </div>
                </div>
                <h4 className="font-medium mb-2">Supply Chain Journey</h4>
                <div className="relative">
                  <div className="absolute left-3 top-0 h-full w-0.5 bg-muted-foreground/20"></div>

                  <div className="relative pl-8 pb-6">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Harvested</p>
                      <p className="text-sm text-muted-foreground">September 15, 2022</p>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-6">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Quality Inspection</p>
                      <p className="text-sm text-muted-foreground">September 16, 2022</p>
                    </div>
                  </div>

                  <div className="relative pl-8 pb-6">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Packaged</p>
                      <p className="text-sm text-muted-foreground">September 17, 2022</p>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Listed on AgriVerse</p>
                      <p className="text-sm text-muted-foreground">September 20, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">4.0</span>
                  <span className="text-sm text-muted-foreground">out of 5</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">5 stars</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full w-[60%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">4 stars</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full w-[25%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">25%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">3 stars</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full w-[10%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">2 stars</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full w-[3%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">3%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">1 star</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full w-[2%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">2%</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Write a Review</Button>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium mb-4">Recent Reviews</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Sarah Chen",
                      avatar: "SC",
                      rating: 5,
                      date: "March 15, 2023",
                      comment:
                        "These apples are absolutely delicious! So crisp and juicy. I love that I can see exactly where they came from and support a sustainable farm directly.",
                    },
                    {
                      name: "Michael Johnson",
                      avatar: "MJ",
                      rating: 4,
                      date: "February 28, 2023",
                      comment:
                        "Great quality apples. They arrived fresh and were exactly as described. Will definitely order again from this farm.",
                    },
                    {
                      name: "Emma Wilson",
                      avatar: "EW",
                      rating: 5,
                      date: "February 10, 2023",
                      comment:
                        "I've been buying these apples for months now and the quality is consistently excellent. Love being able to support farmers directly through this platform.",
                    },
                  ].map((review, i) => (
                    <Card key={i} className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback>{review.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{review.name}</h4>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex my-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Delivery Options</h4>
                    <p className="text-muted-foreground mt-1">
                      We offer several shipping methods to ensure your products arrive fresh and in optimal condition.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Truck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Standard Shipping (1-3 business days)</p>
                        <p className="text-sm text-muted-foreground">
                          $5.99 for orders under $50, free for orders over $50
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Truck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Express Shipping (1 business day)</p>
                        <p className="text-sm text-muted-foreground">$12.99 for all orders</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Packaging</h4>
                    <p className="text-muted-foreground mt-1">
                      All products are carefully packaged in eco-friendly, temperature-controlled containers to ensure
                      freshness during transit.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Returns & Refunds</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We stand behind the quality of our products. If you're not completely satisfied with your purchase,
                    please contact us within 24 hours of delivery.
                  </p>
                  <div>
                    <h4 className="font-medium">Return Policy</h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                      <li>Products must be reported within 24 hours of delivery</li>
                      <li>Photos of damaged or unsatisfactory products are required</li>
                      <li>Refunds are processed within 3-5 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Not Eligible for Return</h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                      <li>Products damaged due to improper storage after delivery</li>
                      <li>Products that have been consumed (beyond sampling)</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      Our customer service team is available to assist you with any questions or concerns.
                    </p>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt="Product image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 rounded-full">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">
                    {["Organic Pears", "Fresh Berries", "Organic Peaches", "Fresh Plums"][i - 1]}
                  </h3>
                  <p className="text-sm text-muted-foreground">Green Valley Farms</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold">${(1.99 + i).toFixed(2)}/lb</p>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
