"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Grid3x3, Heart, LayoutList, Search, ShoppingCart, Star, Truck, ChevronDown } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export default function Marketplace() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 100])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const products = [
    {
      id: 1,
      name: "Organic Apples",
      farm: "Green Valley Farms",
      location: "California, USA",
      price: 2.99,
      unit: "lb",
      rating: 4.8,
      reviews: 24,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["organic", "verified"],
      shipping: "1-2 days",
    },
    {
      id: 2,
      name: "Fresh Carrots",
      farm: "Sunshine Organics",
      location: "Oregon, USA",
      price: 1.49,
      unit: "lb",
      rating: 4.6,
      reviews: 18,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["verified"],
      shipping: "1-2 days",
    },
    {
      id: 3,
      name: "Organic Strawberries",
      farm: "Berry Good Farms",
      location: "Florida, USA",
      price: 4.99,
      unit: "box",
      rating: 4.9,
      reviews: 32,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["organic", "sale"],
      shipping: "1-2 days",
    },
    {
      id: 4,
      name: "Premium Rice",
      farm: "Golden Grain Co.",
      location: "Thailand",
      price: 4.5,
      unit: "kg",
      rating: 4.7,
      reviews: 41,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["verified", "new"],
      shipping: "3-5 days",
    },
    {
      id: 5,
      name: "Organic Honey",
      farm: "Mountain Apiaries",
      location: "Vermont, USA",
      price: 12.99,
      unit: "jar",
      rating: 5.0,
      reviews: 56,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["organic", "verified"],
      shipping: "1-2 days",
    },
    {
      id: 6,
      name: "Specialty Coffee",
      farm: "Highland Coffee",
      location: "Colombia",
      price: 14.99,
      unit: "lb",
      rating: 4.8,
      reviews: 37,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["organic", "sale"],
      shipping: "3-5 days",
    },
    {
      id: 7,
      name: "Fresh Avocados",
      farm: "Tropical Harvests",
      location: "Mexico",
      price: 2.49,
      unit: "each",
      rating: 4.5,
      reviews: 28,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["verified"],
      shipping: "1-2 days",
    },
    {
      id: 8,
      name: "Organic Quinoa",
      farm: "Andean Farms",
      location: "Peru",
      price: 6.99,
      unit: "kg",
      rating: 4.7,
      reviews: 19,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["organic", "new"],
      shipping: "5-7 days",
    },
    {
      id: 9,
      name: "Artisan Cheese",
      farm: "Dairy Delights",
      location: "Wisconsin, USA",
      price: 8.99,
      unit: "lb",
      rating: 4.9,
      reviews: 45,
      image: "/placeholder.svg?height=300&width=300",
      badges: ["verified"],
      shipping: "1-2 days",
    },
  ]

  const categories = [
    { id: "fruits", name: "Fruits & Vegetables" },
    { id: "grains", name: "Grains & Cereals" },
    { id: "dairy", name: "Dairy Products" },
    { id: "meat", name: "Meat & Poultry" },
    { id: "specialty", name: "Specialty Items" },
  ]

  const regions = [
    { id: "north-america", name: "North America" },
    { id: "south-america", name: "South America" },
    { id: "europe", name: "Europe" },
    { id: "africa", name: "Africa" },
    { id: "asia", name: "Asia" },
    { id: "australia", name: "Australia" },
  ]

  const certifications = [
    { id: "organic", name: "Organic" },
    { id: "fair-trade", name: "Fair Trade" },
    { id: "non-gmo", name: "Non-GMO" },
    { id: "sustainable", name: "Sustainable" },
    { id: "regenerative", name: "Regenerative" },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-accent/50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Global Agricultural Marketplace
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Discover and purchase quality agricultural products directly from verified farmers around the world.
            </p>
            <div className="w-full bg-white dark:bg-gray-800 rounded-full shadow-md p-2 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for products, farms, or categories..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-0 shadow-none focus-visible:ring-0"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px] rounded-full border-0 bg-accent/50">
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
              <Button className="rounded-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <motion.div
              className="w-full md:w-64 space-y-8 hidden md:block"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h3 className="font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.id}`} />
                      <label htmlFor={`category-${category.id}`} className="text-sm">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 100]} max={100} step={1} className="mb-6" onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <div className="bg-accent rounded-md px-2 py-1 text-sm">${priceRange[0] * 10}</div>
                  <div className="bg-accent rounded-md px-2 py-1 text-sm">${priceRange[1] * 10}+</div>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Farm Location</h3>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <div key={region.id} className="flex items-center space-x-2">
                      <Checkbox id={`region-${region.id}`} />
                      <label htmlFor={`region-${region.id}`} className="text-sm">
                        {region.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Certifications</h3>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center space-x-2">
                      <Checkbox id={`cert-${cert.id}`} />
                      <label htmlFor={`cert-${cert.id}`} className="text-sm">
                        {cert.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <Button variant="outline" className="w-full rounded-full">
                Reset Filters
              </Button>
            </motion.div>

            {/* Filters - Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden mb-4 rounded-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down products by applying filters</SheetDescription>
                </SheetHeader>
                <div className="overflow-y-auto h-[calc(100vh-10rem)]">
                  <div className="space-y-6 p-4">
                    <div>
                      <h3 className="font-medium mb-4">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-category-${category.id}`} />
                            <label htmlFor={`mobile-category-${category.id}`} className="text-sm">
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-4">Price Range</h3>
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                        className="mb-6"
                        onValueChange={setPriceRange}
                      />
                      <div className="flex items-center justify-between">
                        <div className="bg-accent rounded-md px-2 py-1 text-sm">${priceRange[0] * 10}</div>
                        <div className="bg-accent rounded-md px-2 py-1 text-sm">${priceRange[1] * 10}+</div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-4">Farm Location</h3>
                      <div className="space-y-2">
                        {regions.map((region) => (
                          <div key={region.id} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-region-${region.id}`} />
                            <label htmlFor={`mobile-region-${region.id}`} className="text-sm">
                              {region.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-4">Certifications</h3>
                      <div className="space-y-2">
                        {certifications.map((cert) => (
                          <div key={cert.id} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-cert-${cert.id}`} />
                            <label htmlFor={`mobile-cert-${cert.id}`} className="text-sm">
                              {cert.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t flex gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" className="flex-1 rounded-full">
                      Reset
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="flex-1 rounded-full">Apply Filters</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>

            {/* Products Grid */}
            <div className="flex-1">
              <motion.div
                className="flex flex-wrap justify-between items-center mb-6 gap-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <h2 className="text-xl font-semibold">All Products</h2>
                  <p className="text-sm text-muted-foreground">Showing {products.length} of 156 products</p>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px] rounded-full">
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
                  <Tabs
                    defaultValue={view}
                    onValueChange={(value) => setView(value as "grid" | "list")}
                    className="hidden md:block"
                  >
                    <TabsList className="rounded-full">
                      <TabsTrigger value="grid" className="rounded-full">
                        <Grid3x3 className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger value="list" className="rounded-full">
                        <LayoutList className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </motion.div>

              {/* Grid View */}
              {view === "grid" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className="product-card border-none overflow-hidden h-full">
                        <div className="relative aspect-square">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 rounded-full"
                          >
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Add to favorites</span>
                          </Button>
                          <div className="absolute top-2 left-2 flex flex-wrap gap-2">
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
                              <p className="text-muted-foreground text-xs">{product.location}</p>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium ml-1">{product.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-2">
                            <Truck className="h-4 w-4 mr-1" />
                            Ships in {product.shipping}
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <p className="font-bold text-lg">
                              ${product.price}/{product.unit}
                            </p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="rounded-full" asChild>
                                <Link href={`/marketplace/product/${product.id}`}>Details</Link>
                              </Button>
                              <Button size="sm" className="rounded-full">
                                <ShoppingCart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* List View */}
              {view === "list" && (
                <div className="space-y-4">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className="product-card border-none overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative w-full sm:w-48 h-48">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                              {product.badges.includes("organic") && <Badge className="badge-organic">Organic</Badge>}
                              {product.badges.includes("verified") && (
                                <Badge className="badge-verified">Verified</Badge>
                              )}
                              {product.badges.includes("new") && <Badge className="badge-new">New</Badge>}
                              {product.badges.includes("sale") && <Badge className="badge-sale">Sale</Badge>}
                            </div>
                          </div>
                          <CardContent className="p-6 flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-muted-foreground text-sm">{product.farm}</p>
                                <p className="text-muted-foreground text-xs">{product.location}</p>
                              </div>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium ml-1">{product.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mt-2">
                              <Truck className="h-4 w-4 mr-1" />
                              Ships in {product.shipping}
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <p className="font-bold text-lg">
                                ${product.price}/{product.unit}
                              </p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="rounded-full" asChild>
                                  <Link href={`/marketplace/product/${product.id}`}>Details</Link>
                                </Button>
                                <Button size="sm" className="rounded-full">
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Add to Cart
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                  <Heart className="h-5 w-5" />
                                  <span className="sr-only">Add to favorites</span>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <motion.div
                className="flex justify-center mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled className="rounded-full">
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                  <Button variant="default" size="icon" className="rounded-full">
                    1
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    2
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    3
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    4
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    5
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
