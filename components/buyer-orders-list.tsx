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
import { Eye, MoreHorizontal, MessageSquare, Star } from "lucide-react"
import Image from "next/image"

export default function BuyerOrdersList() {
  const orders = [
    {
      id: "ORD-7291",
      farm: {
        name: "Green Valley Farms",
        image: "/placeholder.svg?height=48&width=48",
      },
      date: "Apr 23, 2023",
      amount: 234.5,
      status: "Processing",
      items: 3,
    },
    {
      id: "ORD-7285",
      farm: {
        name: "Sunshine Organics",
        image: "/placeholder.svg?height=48&width=48",
      },
      date: "Apr 18, 2023",
      amount: 89.99,
      status: "Shipped",
      items: 2,
    },
    {
      id: "ORD-7279",
      farm: {
        name: "Mountain Apiaries",
        image: "/placeholder.svg?height=48&width=48",
      },
      date: "Apr 10, 2023",
      amount: 45.5,
      status: "Delivered",
      items: 1,
    },
    {
      id: "ORD-7268",
      farm: {
        name: "Highland Coffee",
        image: "/placeholder.svg?height=48&width=48",
      },
      date: "Mar 28, 2023",
      amount: 124.75,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-7254",
      farm: {
        name: "Tropical Harvests",
        image: "/placeholder.svg?height=48&width=48",
      },
      date: "Mar 15, 2023",
      amount: 67.25,
      status: "Delivered",
      items: 3,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "Shipped":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "Delivered":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return ""
    }
  }

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <Card key={order.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={order.farm.image || "/placeholder.svg"}
                  alt={order.farm.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.farm.name}</p>
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
                        View Order Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Farm
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Star className="mr-2 h-4 w-4" />
                        Leave Review
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <p className="font-medium">${order.amount.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.date} • {order.items} items
                    </p>
                  </div>
                  <Badge variant="secondary" className={getStatusColor(order.status)}>
                    {order.status}
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
