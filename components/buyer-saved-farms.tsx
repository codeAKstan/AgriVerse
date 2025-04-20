import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Eye, MoreHorizontal, MessageSquare, Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BuyerSavedFarms() {
  const farms = [
    {
      id: 1,
      name: "Green Valley Farms",
      location: "California, USA",
      products: 24,
      rating: 4.8,
      image: "/placeholder.svg?height=80&width=80",
      newProducts: true,
      certifications: ["Organic", "Sustainable"],
    },
    {
      id: 2,
      name: "Sunshine Organics",
      location: "Florida, USA",
      products: 18,
      rating: 4.6,
      image: "/placeholder.svg?height=80&width=80",
      newProducts: true,
      certifications: ["Organic", "Fair Trade"],
    },
    {
      id: 3,
      name: "Mountain Apiaries",
      location: "Vermont, USA",
      products: 12,
      rating: 4.9,
      image: "/placeholder.svg?height=80&width=80",
      newProducts: false,
      certifications: ["Sustainable"],
    },
    {
      id: 4,
      name: "Highland Coffee",
      location: "Colombia",
      products: 8,
      rating: 4.7,
      image: "/placeholder.svg?height=80&width=80",
      newProducts: true,
      certifications: ["Fair Trade", "Organic"],
    },
    {
      id: 5,
      name: "Tropical Harvests",
      location: "Costa Rica",
      products: 15,
      rating: 4.5,
      image: "/placeholder.svg?height=80&width=80",
      newProducts: false,
      certifications: ["Sustainable", "Non-GMO"],
    },
  ]

  return (
    <div className="grid gap-4">
      {farms.map((farm) => (
        <Card key={farm.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                <Image src={farm.image || "/placeholder.svg"} alt={farm.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{farm.name}</h3>
                      {farm.newProducts && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">New Products</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{farm.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{farm.rating}</span>
                      <span className="text-sm text-muted-foreground">• {farm.products} products</span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Farm Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Farm
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Remove from Saved</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {farm.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="border-green-500 text-green-600">
                      {cert}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Button asChild variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Link href={`/marketplace/farm-${farm.id}`}>View Products</Link>
                  </Button>
                  <Button size="sm" className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
