import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, BarChart3, Clock, CreditCard, Package, ShoppingCart, Truck, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BuyerOrdersList from "@/components/buyer-orders-list"
import BuyerSavedFarms from "@/components/buyer-saved-farms"

export default function BuyerDashboard() {
  return (
    <main className="flex-1 p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Buyer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah Chen</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Account Settings
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Cart
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.80</div>
            <p className="text-xs text-muted-foreground">Lifetime purchases</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 shipping soon</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Saved Farms</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 with new products</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Delivery Status</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">In Transit</div>
            <p className="text-xs text-muted-foreground">Arriving May 2, 2023</p>
          </CardContent>
        </Card>
      </div>

      {/* Order Tracking */}
      <Card className="border-none shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Order Tracking</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/buyer-dashboard/orders">
                View All Orders
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <CardDescription>Track your most recent order</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Order thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Order #ORD-7291</h3>
                    <p className="text-sm text-muted-foreground">3 items from Green Valley Farms</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$234.50</p>
                    <p className="text-sm text-muted-foreground">Apr 23, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-muted-foreground/20"></div>

              <div className="relative pl-6 pb-8">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-green-600"></div>
                <div>
                  <p className="font-medium">Order Placed</p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" /> Apr 23, 2023 at 10:24 AM
                  </p>
                </div>
              </div>

              <div className="relative pl-6 pb-8">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-green-600"></div>
                <div>
                  <p className="font-medium">Order Confirmed</p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" /> Apr 23, 2023 at 11:30 AM
                  </p>
                </div>
              </div>

              <div className="relative pl-6 pb-8">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-green-600"></div>
                <div>
                  <p className="font-medium">Processing Order</p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-3 w-3" /> Apr 24, 2023 at 9:15 AM
                  </p>
                </div>
              </div>

              <div className="relative pl-6 pb-8">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium text-muted-foreground">Shipped</p>
                  <p className="text-sm text-muted-foreground">Estimated: Apr 26, 2023</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium text-muted-foreground">Delivered</p>
                  <p className="text-sm text-muted-foreground">Estimated: May 2, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList>
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="saved">Saved Farms</TabsTrigger>
          <TabsTrigger value="analytics">Purchase Analytics</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Orders</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/buyer-dashboard/orders">
                View All Orders
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <BuyerOrdersList />
        </TabsContent>
        <TabsContent value="saved" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Saved Farms</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/buyer-dashboard/saved">
                View All Saved Farms
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <BuyerSavedFarms />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Purchase Analytics</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/buyer-dashboard/analytics">
                View Detailed Analytics
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Purchase History</CardTitle>
              <CardDescription>Your spending patterns over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <p className="text-muted-foreground">Analytics visualization would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Messages</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/buyer-dashboard/messages">
                View All Messages
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Farmer Communications</CardTitle>
              <CardDescription>Stay in touch with your favorite farmers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">You have no unread messages</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
