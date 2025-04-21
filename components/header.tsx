"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Menu, X, ShoppingCart, User, ChevronDown, Leaf } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "For Farmers", path: "/farmer-portal" },
    { name: "For Buyers", path: "/buyer-dashboard" },
    { name: "About", path: "/about" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <span className="hidden font-bold text-xl sm:inline-block">AgriVerse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                {link.path === "/marketplace" || link.path === "/farmer-portal" || link.path === "/buyer-dashboard" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                          isActive(link.path)
                            ? "text-primary bg-accent"
                            : "text-foreground hover:bg-accent hover:text-primary",
                        )}
                      >
                        {link.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {link.path === "/marketplace" && (
                        <>
                          <DropdownMenuItem asChild>
                            <Link href="/marketplace" className="w-full">
                              All Products
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/marketplace/fruits" className="w-full">
                              Fruits & Vegetables
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/marketplace/grains" className="w-full">
                              Grains & Cereals
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/marketplace/specialty" className="w-full">
                              Specialty Products
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                      {link.path === "/farmer-portal" && (
                        <>
                          <DropdownMenuItem asChild>
                            <Link href="/farmer-portal" className="w-full">
                              Dashboard
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/farmer-portal/products" className="w-full">
                              Products
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/farmer-portal/orders" className="w-full">
                              Orders
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/farmer-portal/analytics" className="w-full">
                              Analytics
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                      {link.path === "/buyer-dashboard" && (
                        <>
                          <DropdownMenuItem asChild>
                            <Link href="/buyer-dashboard" className="w-full">
                              Dashboard
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/buyer-dashboard/orders" className="w-full">
                              Orders
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/buyer-dashboard/saved" className="w-full">
                              Saved Farms
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/buyer-dashboard/payments" className="w-full">
                              Payments
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                      isActive(link.path)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:bg-accent hover:text-primary",
                    )}
                  >
                    <Link href={link.path}>{link.name}</Link>
                  </Button>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Cart Button */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Login/Account Button */}
            <Button asChild variant="default" className="rounded-full hidden md:flex">
              <Link href="/login">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center space-x-2">
                        <Leaf className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl">AgriVerse</span>
                      </Link>
                      <SheetClose className="rounded-full p-2 hover:bg-accent">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                      </SheetClose>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto py-4">
                    <nav className="flex flex-col space-y-1 px-2">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.path}>
                          <Link
                            href={link.path}
                            className={cn(
                              "flex items-center px-3 py-3 text-base font-medium rounded-lg transition-colors",
                              isActive(link.path)
                                ? "text-primary bg-accent"
                                : "text-foreground hover:bg-accent hover:text-primary",
                            )}
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>

                    <div className="mt-6 px-4">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Marketplace</div>
                      <nav className="flex flex-col space-y-1">
                        <SheetClose asChild>
                          <Link href="/marketplace" className="text-sm px-3 py-2 rounded-lg hover:bg-accent">
                            All Products
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/marketplace/fruits" className="text-sm px-3 py-2 rounded-lg hover:bg-accent">
                            Fruits & Vegetables
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/marketplace/grains" className="text-sm px-3 py-2 rounded-lg hover:bg-accent">
                            Grains & Cereals
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/marketplace/specialty" className="text-sm px-3 py-2 rounded-lg hover:bg-accent">
                            Specialty Products
                          </Link>
                        </SheetClose>
                      </nav>
                    </div>
                  </div>

                  <div className="p-4 border-t">
                    <SheetClose asChild>
                      <Button asChild className="w-full rounded-full">
                        <Link href="/login">
                          <User className="mr-2 h-4 w-4" />
                          Sign In
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-16 bg-background border-b shadow-lg p-4 animate-in fade-in slide-in-from-top-4">
          <div className="container mx-auto">
            <div className="flex items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products, farms, or categories..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-muted"
                  autoFocus
                />
              </div>
              <Button variant="ghost" size="icon" className="ml-2 rounded-full" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium text-muted-foreground mb-2">Popular Searches</div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href="/marketplace/fruits">Organic Apples</Link>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href="/marketplace/grains">Premium Rice</Link>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href="/marketplace/specialty">Specialty Coffee</Link>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href="/marketplace/fruits">Fresh Avocados</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
