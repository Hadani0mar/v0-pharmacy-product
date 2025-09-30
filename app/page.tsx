import { ProductsGrid } from "@/components/products-grid"
import { Header } from "@/components/header"
import { Filters } from "@/components/filters"

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">منتجات الصيدلية</h1>
          <p className="text-muted-foreground text-lg">اكتشف مجموعة واسعة من المنتجات الطبية والصحية</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <Filters />
          </aside>
          <div className="flex-1">
            <ProductsGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
