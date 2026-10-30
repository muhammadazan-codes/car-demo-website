import { motion } from "framer-motion"
import { Car, HeartHandshake, MessageCircle, UserCheck, Phone, MapPin } from "lucide-react"

const LOCATION_URL = "REPLACE_WITH_VERIFIED_GOOGLE_MAPS_URL"

const features = [
  { icon: Car, title: "Quality Cars", description: "Explore vehicles and find an option that suits your needs." },
  { icon: HeartHandshake, title: "Customer-Focused Service", description: "Get friendly assistance throughout your car-buying journey." },
  { icon: MessageCircle, title: "Clear Communication", description: "Contact our team to ask questions about vehicles that interest you." },
  { icon: UserCheck, title: "Personal Assistance", description: "Get help choosing your next vehicle." },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose <span className="text-red-500">Black Diamond</span> Car Lab?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Discover the reasons customers consider Black Diamond Car Lab when looking for their next vehicle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+923258008111"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Phone size={18} />
            Call Us
          </a>
          <a
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <MapPin size={18} />
            Visit Our Location
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof features)[number]; index: number }) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
    </motion.div>
  )
}
