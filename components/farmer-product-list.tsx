import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function FarmerProductList() {
  const products = [
    {
      id: 1,
      name: "Organic Apples",
      category: "Fruits",
      price: 2.99,
      unit: "lb",
      stock: 250,
      status: "In Stock",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Fresh Carrots",
      category: "Vegetables",
      price: 1.49,
      unit: "lb",
      stock: 180,
      status: "In Stock",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Organic Strawberries",
      category: "Fruits",
      price: 4.99,
      unit: "box",
      stock: 75,
      status: "Low Stock",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Fresh Lettuce",
      category: "Vegetables",
      price: 1.99,
      unit: "head",
      stock: 120,
      status: "In Stock",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Organic Blueberries",
      category: "Fruits",
      price: 5.49,
      unit: "box",
      stock: 0,
      status: "Out of Stock",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <Card key={product.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
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
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Product
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Analytics</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Product
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <p className="font-medium">
                      ${product.price}/{product.unit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Stock: {product.stock} {product.unit}s
                    </p>
                  </div>
                  <Badge
                    variant={
                      product.status === "In Stock"
                        ? "outline"
                        : product.status === "Low Stock"
                          ? "secondary"
                          : "destructive"
                    }
                    className={
                      product.status === "In Stock"
                        ? "border-green-500 text-green-600"
                        : product.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          : ""
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
