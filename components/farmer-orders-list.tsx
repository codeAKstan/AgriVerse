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
import { Eye, MoreHorizontal, Truck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FarmerOrdersList() {
  const orders = [
    {
      id: "ORD-7291",
      customer: {
        name: "Sarah Chen",
        avatar: "SC",
      },
      date: "Apr 23, 2023",
      amount: 234.5,
      status: "Pending",
      items: 3,
    },
    {
      id: "ORD-7290",
      customer: {
        name: "Michael Johnson",
        avatar: "MJ",
      },
      date: "Apr 22, 2023",
      amount: 125.0,
      status: "Processing",
      items: 2,
    },
    {
      id: "ORD-7289",
      customer: {
        name: "Emma Wilson",
        avatar: "EW",
      },
      date: "Apr 21, 2023",
      amount: 345.75,
      status: "Shipped",
      items: 5,
    },
    {
      id: "ORD-7288",
      customer: {
        name: "David Kim",
        avatar: "DK",
      },
      date: "Apr 20, 2023",
      amount: 89.99,
      status: "Delivered",
      items: 1,
    },
    {
      id: "ORD-7287",
      customer: {
        name: "Lisa Rodriguez",
        avatar: "LR",
      },
      date: "Apr 19, 2023",
      amount: 178.25,
      status: "Delivered",
      items: 3,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
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
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                <AvatarFallback>{order.customer.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.customer.name}</p>
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
                        <Truck className="mr-2 h-4 w-4" />
                        Update Shipping
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Contact Customer</DropdownMenuItem>
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
