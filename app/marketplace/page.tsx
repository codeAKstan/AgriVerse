import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter, Grid3x3, Heart, LayoutList, Search, ShoppingCart, Star, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Marketplace() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-green-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Global Agricultural Marketplace
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Discover and purchase quality agricultural products directly from verified farmers around the world.
            </p>
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <Input placeholder="Search for products, farms, or categories..." className="w-full" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fruits">Fruits & Vegetables</SelectItem>
                  <SelectItem value="grains">Grains & Cereals</SelectItem>
                  <SelectItem value="dairy">Dairy Products</SelectItem>
                  <SelectItem value="meat">Meat & Poultry</SelectItem>
                  <SelectItem value="specialty">Specialty Items</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-green-600 hover:bg-green-700">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Desktop */}
            <div className="w-full md:w-64 space-y-6 hidden md:block">
              <div>
                <h3 className="font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {[
                    "Fruits & Vegetables",
                    "Grains & Cereals",
                    "Dairy Products",
                    "Meat & Poultry",
                    "Specialty Items",
                  ].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label htmlFor={`category-${category}`} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 100]} max={100} step={1} className="mb-6" />
                <div className="flex items-center justify-between">
                  <div className="bg-muted rounded-md px-2 py-1 text-sm">$0</div>
                  <div className="bg-muted rounded-md px-2 py-1 text-sm">$1000+</div>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Farm Location</h3>
                <div className="space-y-2">
                  {["North America", "South America", "Europe", "Africa", "Asia", "Australia"].map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox id={`region-${region}`} />
                      <label htmlFor={`region-${region}`} className="text-sm">
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Certifications</h3>
                <div className="space-y-2">
                  {["Organic", "Fair Trade", "Non-GMO", "Sustainable", "Regenerative"].map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <Checkbox id={`cert-${cert}`} />
                      <label htmlFor={`cert-${cert}`} className="text-sm">
                        {cert}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </div>

            {/* Filters - Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden mb-4">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down products by applying filters</SheetDescription>
                </SheetHeader>
                <div className="space-y-6 py-4">
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      {[
                        "Fruits & Vegetables",
                        "Grains & Cereals",
                        "Dairy Products",
                        "Meat & Poultry",
                        "Specialty Items",
                      ].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`mobile-category-${category}`} />
                          <label htmlFor={`mobile-category-${category}`} className="text-sm">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-4">Price Range</h3>
                    <Slider defaultValue={[0, 100]} max={100} step={1} className="mb-6" />
                    <div className="flex items-center justify-between">
                      <div className="bg-muted rounded-md px-2 py-1 text-sm">$0</div>
                      <div className="bg-muted rounded-md px-2 py-1 text-sm">$1000+</div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-4">Farm Location</h3>
                    <div className="space-y-2">
                      {["North America", "South America", "Europe", "Africa", "Asia", "Australia"].map((region) => (
                        <div key={region} className="flex items-center space-x-2">
                          <Checkbox id={`mobile-region-${region}`} />
                          <label htmlFor={`mobile-region-${region}`} className="text-sm">
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-4">Certifications</h3>
                    <div className="space-y-2">
                      {["Organic", "Fair Trade", "Non-GMO", "Sustainable", "Regenerative"].map((cert) => (
                        <div key={cert} className="flex items-center space-x-2">
                          <Checkbox id={`mobile-cert-${cert}`} />
                          <label htmlFor={`mobile-cert-${cert}`} className="text-sm">
                            {cert}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">All Products</h2>
                  <p className="text-sm text-muted-foreground">Showing 24 of 156 products</p>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                  <Tabs defaultValue="grid" className="hidden md:block">
                    <TabsList>
                      <TabsTrigger value="grid">
                        <Grid3x3 className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger value="list">
                        <LayoutList className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              {/* Grid View */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, i) => (
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
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Organic</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {
                              [
                                "Organic Apples",
                                "Fresh Carrots",
                                "Premium Rice",
                                "Organic Honey",
                                "Specialty Coffee",
                                "Fresh Avocados",
                                "Organic Quinoa",
                                "Artisan Cheese",
                                "Grass-Fed Beef",
                              ][i % 9]
                            }
                          </CardTitle>
                          <CardDescription>
                            {
                              [
                                "Green Valley Farms",
                                "Sunshine Organics",
                                "Golden Grain Co.",
                                "Mountain Apiaries",
                                "Highland Coffee",
                                "Tropical Harvests",
                                "Andean Farms",
                                "Dairy Delights",
                                "Prairie Pastures",
                              ][i % 9]
                            }
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{(4 + (i % 10) / 10).toFixed(1)}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold">
                          ${(2 + i * 1.5).toFixed(2)}/{["lb", "lb", "kg", "jar", "lb", "each", "kg", "lb", "lb"][i % 9]}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Truck className="h-4 w-4 mr-1" />
                          Ships in 1-2 days
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/marketplace/product-${i + 1}`}>Details</Link>
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
