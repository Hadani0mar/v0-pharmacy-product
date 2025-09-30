"use client"

import { useEffect, useState } from "react"
import { getSupabase } from "@/lib/supabase"
import { ProductCard } from "@/components/product-card"
import { Skeleton } from "@/components/ui/skeleton"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url?: string
  category_id: string
  brand_id: string
  categories?: { name: string }
  brands?: { name: string }
}

export function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const supabase = getSupabase()

      try {
        const { data, error } = await supabase
          .from("products")
          .select(`
            *,
            categories (name),
            brands (name)
          `)
          .order("name")

        if (error) {
          console.error("[v0] Error fetching products:", error)
        } else if (data) {
          setProducts(data)
        }
      } catch (error) {
        console.error("[v0] Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">لا توجد منتجات متاحة</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
