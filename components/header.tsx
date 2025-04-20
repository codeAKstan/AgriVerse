"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Wallet, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="AgriVerse Logo" width={32} height={32} />
            <span className="hidden font-bold sm:inline-block">AgriVerse</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Marketplace</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/marketplace"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Global Marketplace</div>
                          <p className="text-sm leading-tight text-white/90">
                            Browse products from verified farmers around the world
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/marketplace/fruits" title="Fruits & Vegetables">
                      Fresh produce from farms worldwide
                    </ListItem>
                    <ListItem href="/marketplace/grains" title="Grains & Cereals">
                      Quality grains for all your needs
                    </ListItem>
                    <ListItem href="/marketplace/specialty" title="Specialty Products">
                      Unique and rare agricultural products
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Farmers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/farmer-portal" title="Farmer Portal">
                      Manage your farm profile, listings, and orders
                    </ListItem>
                    <ListItem href="/farmer-portal/products" title="Product Management">
                      List and manage your agricultural products
                    </ListItem>
                    <ListItem href="/farmer-portal/orders" title="Order Management">
                      Track and fulfill your customer orders
                    </ListItem>
                    <ListItem href="/farmer-portal/analytics" title="Analytics">
                      Insights and data about your farm business
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Buyers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/buyer-dashboard" title="Buyer Dashboard">
                      Manage your purchases and track orders
                    </ListItem>
                    <ListItem href="/buyer-dashboard/saved" title="Saved Farms">
                      View your favorite farms and products
                    </ListItem>
                    <ListItem href="/buyer-dashboard/orders" title="Order History">
                      Track your past and current orders
                    </ListItem>
                    <ListItem href="/buyer-dashboard/payments" title="Payment Methods">
                      Manage your payment options
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant={isWalletConnected ? "outline" : "default"}
            className={cn("hidden md:flex", isWalletConnected && "border-green-500 text-green-600")}
            onClick={() => setIsWalletConnected(!isWalletConnected)}
          >
            <Wallet className="mr-2 h-4 w-4" />
            {isWalletConnected ? "Connected" : "Connect Wallet"}
          </Button>
          <Button asChild variant="secondary" className="hidden md:flex">
            <Link href="/login">Sign In</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/placeholder.svg?height=32&width=32" alt="AgriVerse Logo" width={32} height={32} />
                  <span className="font-bold">AgriVerse</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="/marketplace" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Marketplace
                  </Link>
                  <Link href="/farmer-portal" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    For Farmers
                  </Link>
                  <Link href="/buyer-dashboard" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    For Buyers
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    About
                  </Link>
                </nav>
                <div className="flex flex-col gap-2 mt-auto">
                  <Button
                    variant={isWalletConnected ? "outline" : "default"}
                    className={cn(isWalletConnected && "border-green-500 text-green-600")}
                    onClick={() => setIsWalletConnected(!isWalletConnected)}
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    {isWalletConnected ? "Connected" : "Connect Wallet"}
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
