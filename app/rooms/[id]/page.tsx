"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wifi, Wind, Tv, Coffee, Wine, Shirt, Clock, Bath, Users, BedDouble, Maximize, Waves } from "lucide-react"
import Link from "next/link"

const roomImages = [
  "/oceanfront-suite-bedroom-with-ocean-view.jpg",
  "/luxury-hotel-bedroom-headboard.jpg",
  "/modern-hotel-bathroom-marble.jpg",
  "/hotel-room-balcony-ocean-view.jpg",
  "/luxury-hotel-amenities.jpg",
]

const amenities = [
  { icon: Wifi, label: "Free high-speed Wi-Fi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: '55" Smart TV' },
  { icon: Coffee, label: "Nespresso Machine" },
  { icon: Wine, label: "Mini Bar" },
  { icon: Shirt, label: "Iron & Ironing Board" },
  { icon: Clock, label: "Daily Housekeeping" },
  { icon: Clock, label: "24/7 Room Service" },
  { icon: Bath, label: "Soaking Tub" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function RoomDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/rooms" className="hover:text-primary transition-colors">
              Rooms
            </Link>
            <span>/</span>
            <span className="text-foreground">Oceanfront King Suite</span>
          </motion.nav>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8"
          >
            <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden">
              <img
                src={roomImages[0] || "/placeholder.svg"}
                alt="Main room view"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            {roomImages.slice(1, 3).map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden hidden md:block">
                <img src={img || "/placeholder.svg"} alt={`Room view ${i + 2}`} className="w-full h-40 object-cover" />
              </div>
            ))}
            <div className="rounded-xl overflow-hidden hidden md:block">
              <img src={roomImages[3] || "/placeholder.svg"} alt="Room view 4" className="w-full h-40 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden relative bg-muted hidden md:flex items-center justify-center h-40">
              <Button variant="outline" size="sm">
                View all photos
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room Details */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-2">
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Oceanfront King Suite
              </motion.h1>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                Spacious suite with a private balcony and stunning ocean view. Perfect for couples and solo travelers
                seeking a luxurious escape.
              </motion.p>

              <motion.div variants={itemVariants} className="border-t border-border pt-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Users className="mx-auto text-amber-600 mb-2" size={28} />
                    <div className="font-semibold text-foreground text-sm">2 Guests</div>
                    <div className="text-xs text-muted-foreground">Max Occupancy</div>
                  </div>
                  <div className="text-center">
                    <BedDouble className="mx-auto text-amber-600 mb-2" size={28} />
                    <div className="font-semibold text-foreground text-sm">1 King Bed</div>
                    <div className="text-xs text-muted-foreground">Bed Type</div>
                  </div>
                  <div className="text-center">
                    <Maximize className="mx-auto text-amber-600 mb-2" size={28} />
                    <div className="font-semibold text-foreground text-sm">450 sq ft</div>
                    <div className="text-xs text-muted-foreground">Room Size</div>
                  </div>
                  <div className="text-center">
                    <Waves className="mx-auto text-amber-600 mb-2" size={28} />
                    <div className="font-semibold text-foreground text-sm">Ocean View</div>
                    <div className="text-xs text-muted-foreground">Key Feature</div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="border-t border-border pt-6 mb-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">About this room</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience ultimate relaxation in our Oceanfront King Suite. This elegantly appointed room features a
                  plush king-sized bed, a comfortable seating area, and floor-to-ceiling windows that open onto a
                  private balcony. Gaze at the breathtaking panoramic ocean views as you enjoy your morning coffee or an
                  evening cocktail. The modern, spa-like bathroom includes a rainfall shower, premium toiletries, and
                  soft bathrobes for your comfort.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="border-t border-border pt-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground">
                      <amenity.icon size={18} className="text-muted-foreground" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Booking Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border border-border p-6 sticky top-24 shadow-sm">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-foreground">$350</span>
                  <span className="text-muted-foreground">/ night</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Check-in</label>
                    <Input type="date" className="bg-white" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Check-out</label>
                    <Input type="date" className="bg-white" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm text-muted-foreground mb-2 block">Guests</label>
                  <select className="w-full h-10 rounded-md border border-input bg-white px-3 text-sm">
                    <option>1 guest</option>
                    <option>2 guests</option>
                  </select>
                </div>

                <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white mb-3">Book Now</Button>
                <p className="text-center text-xs text-muted-foreground">You won't be charged yet</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
