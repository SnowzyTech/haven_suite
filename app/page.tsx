"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const packages = [
  {
    title: "Weekend Getaway",
    description: "Escape for a few days of pure relaxation.",
    image: "/couple-relaxing-in-luxury-hotel-pool.jpg",
  },
  {
    title: "Spa Retreat",
    description: "Rejuvenate your body and soul with our wellness packages.",
    image: "/luxury-spa-candles.png",
  },
  {
    title: "Dining Experience",
    description: "Indulge in a culinary journey with our executive chef.",
    image: "/gourmet-fine-dining-plate-presentation.jpg",
  },
]

const amenities = [
  { icon: "pool", title: "Infinity Pool", description: "Breathtaking city views" },
  { icon: "spa", title: "Spa & Wellness", description: "Full-service rejuvenation" },
  { icon: "fitness_center", title: "Fitness Center", description: "24/7 state-of-the-art gym" },
  { icon: "restaurant", title: "Gourmet Dining", description: "Award-winning cuisine" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/luxury-hotel-room-with-city-skyline-view-at-dusk.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Experience Unrivaled Luxury</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Your sanctuary in the city awaits. Find your perfect stay with us.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="text-sm text-muted-foreground mb-2 block">Check-in</label>
                <Input type="date" className="bg-white text-foreground" defaultValue="2024-08-15" />
              </div>
              <div className="text-left">
                <label className="text-sm text-muted-foreground mb-2 block">Check-out</label>
                <Input type="date" className="bg-white text-foreground" defaultValue="2024-08-20" />
              </div>
              <div className="text-left">
                <label className="text-sm text-muted-foreground mb-2 block">Guests</label>
                <Select defaultValue="2">
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button asChild className="w-full">
                <Link href="/rooms">Check Availability</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Exclusive Packages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Exclusive Packages & Special Offers</h2>
            <p className="text-muted-foreground">Curated experiences designed for an unforgettable stay.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="group">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                <Link href="/rooms" className="text-sm text-primary font-medium hover:underline">
                  View Offer
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">World-Class Amenities</h2>
            <p className="text-muted-foreground">Everything you need for a perfect stay.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {amenities.map((amenity, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }} className="text-center">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-primary mb-3 block">
                  {amenity.icon}
                </span>
                <h3 className="font-semibold text-foreground mb-1">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
