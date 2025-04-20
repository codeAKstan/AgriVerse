import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/placeholder.svg?height=32&width=32" alt="AgriVerse Logo" width={32} height={32} />
              <span className="font-bold">AgriVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              A blockchain-powered marketplace connecting farmers directly with buyers worldwide, ensuring fair prices
              and transparent transactions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">For Farmers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/farmer-portal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Farmer Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/farmer-portal/products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  List Products
                </Link>
              </li>
              <li>
                <Link
                  href="/farmer-portal/orders"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Manage Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/farmer-portal/analytics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/buyer-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Buyer Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/buyer-dashboard/orders"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  href="/buyer-dashboard/saved"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Saved Farms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AgriVerse. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
