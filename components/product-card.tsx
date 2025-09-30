import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image_url?: string
    categories?: { name: string }
    brands?: { name: string }
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="aspect-square bg-muted relative overflow-hidden">
          {product.image_url ? (
            <img
              src={product.image_url || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-muted-foreground text-sm">لا توجد صورة</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-foreground leading-tight">{product.name}</h3>
          {product.brands && (
            <Badge variant="secondary" className="text-xs shrink-0">
              {product.brands.name}
            </Badge>
          )}
        </div>
        {product.categories && (
          <Badge variant="outline" className="mb-2 text-xs">
            {product.categories.name}
          </Badge>
        )}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price.toFixed(2)} ر.س</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="lg">
          <ShoppingCart className="ml-2 h-4 w-4" />
          أضف للسلة
        </Button>
      </CardFooter>
    </Card>
  )
}
