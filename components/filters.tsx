"use client"

import { useEffect, useState } from "react"
import { getSupabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"

interface Category {
  id: string
  name: string
}

interface Brand {
  id: string
  name: string
}

export function Filters() {
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFilters() {
      const supabase = getSupabase()

      try {
        // Fetch categories
        const { data: categoriesData } = await supabase.from("categories").select("id, name").order("name")

        // Fetch brands
        const { data: brandsData } = await supabase.from("brands").select("id, name").order("name")

        if (categoriesData) setCategories(categoriesData)
        if (brandsData) setBrands(brandsData)
      } catch (error) {
        console.error("[v0] Error fetching filters:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFilters()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-24" />
          </CardHeader>
          <CardContent className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-5 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">المجموعات</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">العلامات التجارية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center gap-2">
              <Checkbox id={`brand-${brand.id}`} />
              <Label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer">
                {brand.name}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
