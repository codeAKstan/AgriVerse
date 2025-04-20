import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Coffee Farmer, Colombia",
      content:
        "AgriVerse has transformed my business. I now sell directly to buyers across the world and earn 40% more than before. The blockchain verification gives my customers confidence in my organic practices.",
      avatar: "MR",
    },
    {
      name: "John Mwangi",
      role: "Grain Producer, Kenya",
      content:
        "Before AgriVerse, I was at the mercy of local middlemen. Now I set my own prices and connect with buyers who value quality. The platform is easy to use even with limited internet access.",
      avatar: "JM",
    },
    {
      name: "Sarah Chen",
      role: "Food Importer, Singapore",
      content:
        "As a buyer, I can now source directly from farmers with complete transparency. The quality is exceptional, and I love being able to trace products back to their origin through blockchain verification.",
      avatar: "SC",
    },
    {
      name: "Raj Patel",
      role: "Spice Exporter, India",
      content:
        "The analytics tools have helped me understand market trends and price my products competitively. My customer base has grown by 300% since joining AgriVerse just eight months ago.",
      avatar: "RP",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Hear from farmers and buyers who have transformed their businesses with AgriVerse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-4 border-t">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback className="bg-green-100 text-green-800">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
