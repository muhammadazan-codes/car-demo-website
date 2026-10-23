import React, { useState, useRef } from "react"

interface Car {
  id: string
  name: string
  year: number
  type: string
  description: string
  specs: string[]
  price: string
  image: string
}

const cars: Car[] = [
  { id: "corolla", name: "Toyota Corolla Altis 1.6", year: 2024, type: "Sedan", description: "A dependable daily sedan with balanced comfort and efficiency.", specs: ["Automatic", "Petrol", "1.6L"], price: "PKR 7,200,000 (demo)", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCvOBZBQGaulGvAVFXHhBm96cURw27e9b4y5-se-lHg&s=10" },
  { id: "civic", name: "Honda Civic Oriel", year: 2024, type: "Sedan", description: "Sporty styling with a refined cabin and confident road presence.", specs: ["CVT", "Petrol", "1.5L Turbo"], price: "PKR 8,400,000 (demo)", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80" },
  { id: "swift", name: "Suzuki Swift GLX CVT", year: 2024, type: "Hatchback", description: "Compact agility with modern features for city driving.", specs: ["CVT", "Petrol", "1.2L"], price: "PKR 4,300,000 (demo)", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80" },
  { id: "yaris", name: "Toyota Yaris ATIV X", year: 2024, type: "Sedan", description: "Practical size, efficient performance, and everyday reliability.", specs: ["CVT", "Petrol", "1.3L"], price: "PKR 5,100,000 (demo)", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80" },
  { id: "sportage", name: "Kia Sportage AWD", year: 2024, type: "SUV", description: "Spacious SUV with all-wheel drive and bold design.", specs: ["Automatic", "Petrol", "2.0L"], price: "PKR 9,800,000 (demo)", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&q=80" },
  { id: "tucson", name: "Hyundai Tucson", year: 2024, type: "SUV", description: "Modern SUV with premium comfort and advanced features.", specs: ["Automatic", "Petrol", "2.0L"], price: "PKR 10,200,000 (demo)", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80" },
]

export function FeaturedCars() {
  const [selected, setSelected] = useState<Car | null>(null)

  return (
    <section id="cars" className="py-12 md:py-20 scroll-mt-24 bg-background ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-widest text-primary">OUR COLLECTION</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Find Your Perfect Drive</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Explore our handpicked selection of vehicles, from everyday comfort to premium performance. Discover the right car for your lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => (
            <TiltCard key={car.id} car={car} onView={() => setSelected(car)} />
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div className="max-w-lg rounded-2xl bg-card p-6 text-foreground" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="mb-4 text-sm text-primary">Close</button>
            <img src={selected.image} alt={selected.name} className="mb-4 w-full rounded-xl object-cover" />
            <h3 className="text-xl font-bold">{selected.name}</h3>
            <p className="mt-2 text-muted-foreground">{selected.description}</p>
            <p className="mt-2 text-sm">{selected.specs.join(" | ")}</p>
            <p className="mt-2 font-semibold text-primary">{selected.price}</p>
          </div>
        </div>
      )}
    </section>
  )
}

function TiltCard({ car, onView }: { car: Car; onView: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = "perspective(1200px) rotateY(" + (x * 10) + "deg) rotateX(" + (-y * 10) + "deg) translateZ(8px)"
    el.style.setProperty("--mx", ((x + 0.5) * 100) + "%")
    el.style.setProperty("--my", ((y + 0.5) * 100) + "%")
  }
  const handleLeave = () => {
    const el = ref.current
    if (el) {
      el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px)"
      el.style.removeProperty("--mx")
      el.style.removeProperty("--my")
    }
  }
  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-transform duration-200" style={{ transformStyle: "preserve-3d" }}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(227,38,54,0.25), transparent 60%)" }} />
      <img src={car.image} alt={car.name} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="p-4">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">{car.type}</span>
        <h3 className="mt-1 text-base font-bold text-foreground">{car.name} <span className="text-sm text-muted-foreground">{car.year}</span></h3>
        <p className="mt-1 text-xs text-muted-foreground">{car.description}</p>
        <p className="mt-1 text-xs text-muted-foreground">{car.specs.join(" | ")}</p>
        <button onClick={onView} className="mt-3 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">View Details</button>
      </div>
    </div>
  )
}

export default FeaturedCars

