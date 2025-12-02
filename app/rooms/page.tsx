"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { MapPin, Calendar, Users, Wifi, Waves, Bath, Star, X } from "lucide-react"
import Link from "next/link"

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    description: "Spacious room with a king-sized bed and stunning city views.",
    image: "/luxury-hotel-room-king-bed-city-view.jpg",
    price: 250,
    amenities: ["Wi-Fi", "Pool", "King"],
    type: "king",
  },
  {
    id: 2,
    name: "Cozy Queen Room",
    description: "A perfect retreat for couples, featuring elegant decor.",
    image: "/cozy-hotel-room-queen-bed-elegant.jpg",
    price: 190,
    amenities: ["Wi-Fi", "Spa", "Queen"],
    type: "queen",
  },
  {
    id: 3,
    name: "Executive Suite",
    description: "Ultimate luxury with a living area, workspace, and premium amenities.",
    image: "/executive-suite-living-area-luxury.jpg",
    price: 450,
    amenities: ["Wi-Fi", "Pool", "Spa"],
    type: "suite",
  },
  {
    id: 4,
    name: "Family Room",
    description: "Ideal for families, with two double beds and space for everyone.",
    image: "/family-hotel-room-two-beds-spacious.jpg",
    price: 320,
    amenities: ["Wi-Fi", "Pool", "4 Guests"],
    type: "king",
  },
  {
    id: 5,
    name: "Standard Single",
    description: "Comfortable and modern room for the solo traveler.",
    image: "/standard-single-hotel-room-modern.jpg",
    price: 150,
    amenities: ["Wi-Fi", "1 Guest"],
    type: "queen",
  },
  {
    id: 6,
    name: "Ocean View Suite",
    description: "Wake up to breathtaking ocean views from your private balcony.",
    image: "/ocean-view-suite-balcony-luxury-hotel.jpg",
    price: 520,
    amenities: ["Wi-Fi", "Balcony", "King"],
    type: "suite",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export default function RoomsPage() {
  const [priceRange, setPriceRange] = useState([150, 750])
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["king"])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(["wifi", "pool"])
  const [rating, setRating] = useState(4)
  const [showFilters, setShowFilters] = useState(false)

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-1">Filter Results</h3>
        <p className="text-sm text-muted-foreground">Refine your search</p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-muted-foreground">sell</span>
          <span className="font-medium text-foreground">Price Range</span>
        </div>
        <Slider value={priceRange} onValueChange={setPriceRange} min={100} max={800} step={10} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-muted-foreground">bed</span>
          <span className="font-medium text-foreground">Room Type</span>
        </div>
        <div className="space-y-2">
          {[
            { id: "king", label: "King Room" },
            { id: "queen", label: "Queen Room" },
            { id: "suite", label: "Suite" },
          ].map((type) => (
            <div key={type.id} className="flex items-center gap-2">
              <Checkbox
                id={type.id}
                checked={selectedTypes.includes(type.id)}
                onCheckedChange={() => toggleType(type.id)}
              />
              <label htmlFor={type.id} className="text-sm text-foreground cursor-pointer">
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Wifi size={18} className="text-muted-foreground" />
          <span className="font-medium text-foreground">Amenities</span>
        </div>
        <div className="space-y-2">
          {[
            { id: "wifi", label: "Wi-Fi" },
            { id: "pool", label: "Pool" },
            { id: "spa", label: "Spa" },
          ].map((amenity) => (
            <div key={amenity.id} className="flex items-center gap-2">
              <Checkbox
                id={amenity.id}
                checked={selectedAmenities.includes(amenity.id)}
                onCheckedChange={() => toggleAmenity(amenity.id)}
              />
              <label htmlFor={amenity.id} className="text-sm text-foreground cursor-pointer">
                {amenity.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Star size={18} className="text-muted-foreground" />
          <span className="font-medium text-foreground">Star Rating</span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} className="focus:outline-none">
              <Star
                size={20}
                className={`${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} transition-colors`}
              />
            </button>
          ))}
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
      <button className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors">
        Clear All
      </button>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              Available Rooms
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-foreground">Paris, France</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm">
                <Calendar size={16} className="text-muted-foreground" />
                <span className="text-foreground">10 Aug - 15 Aug</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm">
                <Users size={16} className="text-muted-foreground" />
                <span className="text-foreground">2 Guests</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button variant="outline" onClick={() => setShowFilters(true)} className="w-full">
              Show Filters
            </Button>
          </div>

          {/* Mobile Filter Overlay */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 lg:hidden"
              >
                <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-semibold text-lg">Filters</h2>
                    <button onClick={() => setShowFilters(false)}>
                      <X size={24} />
                    </button>
                  </div>
                  <FilterSidebar />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:block w-64 flex-shrink-0"
            >
              <div className="bg-white rounded-xl p-6 sticky top-24">
                <FilterSidebar />
              </div>
            </motion.aside>

            {/* Room Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {rooms.map((room) => (
                <motion.div
                  key={room.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{room.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{room.description}</p>
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-1">
                          {amenity === "Wi-Fi" && <Wifi size={14} />}
                          {amenity === "Pool" && <Waves size={14} />}
                          {amenity === "Spa" && <Bath size={14} />}
                          {(amenity === "King" || amenity === "Queen") && (
                            <span className="material-symbols-outlined text-sm">bed</span>
                          )}
                          {amenity === "Balcony" && <span className="material-symbols-outlined text-sm">balcony</span>}
                          {(amenity === "4 Guests" || amenity === "1 Guest") && <Users size={14} />}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-foreground">${room.price}</span>
                        <span className="text-sm text-muted-foreground"> / night</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/rooms/${room.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
