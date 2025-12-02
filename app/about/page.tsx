"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: "verified",
    title: "Excellence",
    description:
      "We pursue perfection in everything we do, from the crispness of our linens to the warmth of our welcome.",
  },
  {
    icon: "diversity_3",
    title: "Community",
    description:
      "We are dedicated to creating a welcoming environment for our guests, our team, and our local community.",
  },
  {
    icon: "eco",
    title: "Sustainability",
    description:
      "We are committed to responsible practices that protect our planet for future generations of travelers.",
  },
]

const team = [
  {
    name: "Olivia Chen",
    role: "General Manager",
    image: "/images/team-olivia.jpg",
  },
  {
    name: "Julian Kace",
    role: "Head of Operations",
    image: "/images/team-julian.jpg",
  },
  {
    name: "Amara Singh",
    role: "Executive Chef",
    image: "/images/team-amara.jpg",
  },
]

const galleryImages = [
  { src: "/images/gallery-city-night.jpg", alt: "City skyline at night" },
  { src: "/images/gallery-bedroom.jpg", alt: "Luxury hotel bedroom" },
  { src: "/images/gallery-food.jpg", alt: "Gourmet restaurant dish" },
  { src: "/images/gallery-suite.jpg", alt: "Hotel suite interior" },
  { src: "/images/gallery-logo.jpg", alt: "Haven Suite logo" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - Updated with city skyline image */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-city-skyline.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The Story of Haven Suite</h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover the passion and purpose behind our world-class hospitality.
          </p>
        </motion.div>
      </section>

      {/* Legacy Section - Updated with couple in robes image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/images/legacy-couple.jpg"
                alt="Couple enjoying city view in luxury robes"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A Legacy of Luxury</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1925, Haven Suite began as a vision of timeless elegance and unparalleled service. Our
                  founder, Eleanor Vance, dreamt of creating a sanctuary in the heart of the city—a place where every
                  guest feels not just welcomed, but truly cherished.
                </p>
                <p>
                  Through the decades, we have evolved, blending classic sophistication with modern comforts. Yet, our
                  core commitment remains unchanged: to provide an extraordinary experience that lingers in memory long
                  after your stay. We are proud custodians of a rich heritage, continually inspired to set new standards
                  in luxury hospitality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Mission & Values</h2>
            <p className="text-muted-foreground">The principles that guide every aspect of our service.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">{value.icon}</span>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Meet Our Leaders</h2>
            <p className="text-muted-foreground">The visionaries steering the Haven Suite experience.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }} className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Updated grid layout to match design */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">A Glimpse of Our Haven</h2>
            <p className="text-muted-foreground">Explore the elegant spaces that define Haven Suite.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {/* Large city image spanning 2 rows */}
            <motion.div variants={itemVariants} className="row-span-2 rounded-xl overflow-hidden">
              <img
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Top right images */}
            <motion.div variants={itemVariants} className="rounded-xl overflow-hidden">
              <img
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                className="w-full h-32 md:h-40 object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-xl overflow-hidden">
              <img
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].alt}
                className="w-full h-32 md:h-40 object-cover"
              />
            </motion.div>

            {/* Bottom right images */}
            <motion.div variants={itemVariants} className="rounded-xl overflow-hidden">
              <img
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].alt}
                className="w-full h-32 md:h-40 object-cover"
              />
            </motion.div>
            {/* Logo circle */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl overflow-hidden bg-[#f5d5c8] flex items-center justify-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5a7a6d] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
