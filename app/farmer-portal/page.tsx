import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, BarChart3, Box, DollarSign, ShoppingCart, Truck, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FarmerProductList from "@/components/farmer-product-list"
import FarmerOrdersList from "@/components/farmer-orders-list"

export default function FarmerPortal() {
  return (
    <main className="flex-1 p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Farmer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Green Valley Farms</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Truck className="mr-2 h-4 w-4" />
            Manage Shipping
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Box className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>
      </div>

      {/* Farm Profile Card */}
      <Card className="border-none shadow-md">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-6">
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=300" alt="Farm Image" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">Green Valley Farms</h2>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Verified
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Organic fruit and vegetable farm located in the lush valleys of California. Specializing in sustainable
                farming practices for over 25 years.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Products</p>
                  <p className="text-xl font-bold">24</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Orders</p>
                  <p className="text-xl font-bold">156</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="text-xl font-bold">4.8/5</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-xl font-bold">$45.2K</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/farmer-portal/profile">Edit Profile</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/farmer-portal/verification">Verification Status</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">-4 from last week</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+28</div>
            <p className="text-xs text-muted-foreground">+4.3% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.00</div>
            <p className="text-xs text-muted-foreground">24 products in stock</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Products</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/farmer-portal/products">
                View All Products
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FarmerProductList />
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/farmer-portal/orders">
                View All Orders
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FarmerOrdersList />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sales Analytics</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/farmer-portal/analytics">
                View Detailed Analytics
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Your sales performance over the last 30 days</CardDescription>
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
              <Link href="/farmer-portal/messages">
                View All Messages
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Buyer Communications</CardTitle>
              <CardDescription>Stay in touch with your customers</CardDescription>
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
