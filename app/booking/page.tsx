"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Users, BedDouble, CreditCard, Check, ChevronRight } from "lucide-react"
import Link from "next/link"

const rooms = [
  {
    id: "oceanfront-king-suite",
    name: "Oceanfront King Suite",
    price: 350,
    image: "/oceanfront-suite-bedroom-with-ocean-view.jpg",
    guests: 2,
    beds: "1 King Bed",
  },
  {
    id: "deluxe-double-room",
    name: "Deluxe Double Room",
    price: 280,
    image: "/luxury-hotel-deluxe-room.png",
    guests: 4,
    beds: "2 Queen Beds",
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    price: 450,
    image: "/luxury-hotel-premium-suite.jpg",
    guests: 3,
    beds: "1 King Bed + Sofa",
  },
  {
    id: "garden-view-room",
    name: "Garden View Room",
    price: 220,
    image: "/luxury-hotel-garden-view-room.jpg",
    guests: 2,
    beds: "1 Queen Bed",
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const selectedRoomData = rooms.find((r) => r.id === selectedRoom)

  const calculateNights = () => {
    if (!bookingDetails.checkIn || !bookingDetails.checkOut) return 0
    const checkIn = new Date(bookingDetails.checkIn)
    const checkOut = new Date(bookingDetails.checkOut)
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const nights = calculateNights()
  const subtotal = selectedRoomData ? selectedRoomData.price * nights : 0
  const taxes = subtotal * 0.12
  const total = subtotal + taxes

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Book Your Stay</span>
          </motion.nav>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Book Your Stay</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete your reservation in just a few simple steps
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {[
              { num: 1, label: "Select Room" },
              { num: 2, label: "Your Details" },
              { num: 3, label: "Confirmation" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? <Check size={16} /> : s.num}
                  </div>
                  <span
                    className={`text-sm hidden sm:inline ${
                      step >= s.num ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 2 && <ChevronRight size={16} className="text-muted-foreground" />}
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Select Room & Dates */}
              {step === 1 && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  {/* Date Selection */}
                  <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-6 mb-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calendar size={20} className="text-primary" />
                      Select Your Dates
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="checkIn" className="text-sm text-muted-foreground mb-2 block">
                          Check-in Date
                        </Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={bookingDetails.checkIn}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, checkIn: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut" className="text-sm text-muted-foreground mb-2 block">
                          Check-out Date
                        </Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={bookingDetails.checkOut}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, checkOut: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests" className="text-sm text-muted-foreground mb-2 block">
                          Guests
                        </Label>
                        <select
                          id="guests"
                          value={bookingDetails.guests}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, guests: e.target.value })}
                          className="w-full h-10 rounded-md border border-input bg-white px-3 text-sm"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>

                  {/* Room Selection */}
                  <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BedDouble size={20} className="text-primary" />
                      Choose Your Room
                    </h2>
                    <div className="space-y-4">
                      {rooms.map((room) => (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoom(room.id)}
                          className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedRoom === room.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <img
                            src={room.image || "/placeholder.svg"}
                            alt={room.name}
                            className="w-full sm:w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{room.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Users size={14} /> Up to {room.guests} guests
                              </span>
                              <span>{room.beds}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-foreground">${room.price}</div>
                            <div className="text-sm text-muted-foreground">per night</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-6 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedRoom || !bookingDetails.checkIn || !bookingDetails.checkOut}
                      className="bg-slate-800 hover:bg-slate-900 text-white px-8"
                    >
                      Continue to Details
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 2: Guest Details */}
              {step === 2 && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Users size={20} className="text-primary" />
                      Guest Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm text-muted-foreground mb-2 block">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={bookingDetails.firstName}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, firstName: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm text-muted-foreground mb-2 block">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={bookingDetails.lastName}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, lastName: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={bookingDetails.email}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={bookingDetails.phone}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="specialRequests" className="text-sm text-muted-foreground mb-2 block">
                        Special Requests (Optional)
                      </Label>
                      <textarea
                        id="specialRequests"
                        placeholder="Any special requests for your stay..."
                        value={bookingDetails.specialRequests}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, specialRequests: e.target.value })}
                        className="w-full min-h-[100px] rounded-md border border-input bg-white px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!bookingDetails.firstName || !bookingDetails.lastName || !bookingDetails.email}
                      className="bg-slate-800 hover:bg-slate-900 text-white px-8"
                    >
                      Review Booking
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-6 mb-6">
                    <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Check size={20} className="text-primary" />
                      Review Your Booking
                    </h2>

                    {/* Room Summary */}
                    <div className="flex gap-4 pb-6 border-b border-border mb-6">
                      <img
                        src={selectedRoomData?.image || "/placeholder.svg"}
                        alt={selectedRoomData?.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{selectedRoomData?.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {bookingDetails.checkIn} to {bookingDetails.checkOut}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {nights} night{nights !== 1 ? "s" : ""} • {bookingDetails.guests} guest
                          {Number.parseInt(bookingDetails.guests) !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>

                    {/* Guest Details Summary */}
                    <div className="pb-6 border-b border-border mb-6">
                      <h3 className="font-medium text-foreground mb-3">Guest Details</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Name:</span>{" "}
                          <span className="text-foreground">
                            {bookingDetails.firstName} {bookingDetails.lastName}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Email:</span>{" "}
                          <span className="text-foreground">{bookingDetails.email}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Phone:</span>{" "}
                          <span className="text-foreground">{bookingDetails.phone || "Not provided"}</span>
                        </div>
                      </div>
                      {bookingDetails.specialRequests && (
                        <div className="mt-3 text-sm">
                          <span className="text-muted-foreground">Special Requests:</span>{" "}
                          <span className="text-foreground">{bookingDetails.specialRequests}</span>
                        </div>
                      )}
                    </div>

                    {/* Payment Info */}
                    <div>
                      <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <CreditCard size={16} />
                        Payment Information
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Payment will be collected at check-in. We accept all major credit cards.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8">Confirm Booking</Button>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Booking Summary Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl border border-border p-6 sticky top-24 shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">Booking Summary</h3>

                {selectedRoomData ? (
                  <>
                    <div className="flex gap-3 pb-4 border-b border-border mb-4">
                      <img
                        src={selectedRoomData.image || "/placeholder.svg"}
                        alt={selectedRoomData.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{selectedRoomData.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{selectedRoomData.beds}</p>
                      </div>
                    </div>

                    {bookingDetails.checkIn && bookingDetails.checkOut && (
                      <div className="space-y-2 pb-4 border-b border-border mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-in</span>
                          <span className="text-foreground">{bookingDetails.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-out</span>
                          <span className="text-foreground">{bookingDetails.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Guests</span>
                          <span className="text-foreground">{bookingDetails.guests}</span>
                        </div>
                      </div>
                    )}

                    {nights > 0 && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            ${selectedRoomData.price} x {nights} night{nights !== 1 ? "s" : ""}
                          </span>
                          <span className="text-foreground">${subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Taxes & fees (12%)</span>
                          <span className="text-foreground">${taxes.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between pt-3 border-t border-border font-semibold">
                          <span className="text-foreground">Total</span>
                          <span className="text-foreground">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">Select a room and dates to see your booking summary.</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
