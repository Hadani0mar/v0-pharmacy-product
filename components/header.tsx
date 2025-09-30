import { Pill, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Pill className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">صيدليتي</h1>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="ابحث عن المنتجات..." className="pr-10" />
            </div>
          </div>

          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
