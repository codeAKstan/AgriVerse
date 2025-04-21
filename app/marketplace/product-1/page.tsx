import { redirect } from "next/navigation"

export default function ProductPage() {
  // Redirect to the product detail page with the correct ID
  redirect("/marketplace/product/1")
}
