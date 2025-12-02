"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: "location_on",
    title: "Our Address",
    content: "123 Luxury Avenue, Metropolis, 10001",
  },
  {
    icon: "call",
    title: "Phone Number",
    content: "+1 (555) 123-4567",
  },
  {
    icon: "mail",
    title: "Email Address",
    content: "contact@havensuite.com",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
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

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Contact Us</h1>
            <p className="text-muted-foreground">{"We're here to help. Get in touch with us for any inquiries."}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <h2 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-2xl text-primary">{info.icon}</span>
                    <div>
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div variants={itemVariants} className="rounded-xl overflow-hidden h-48 md:h-64">
                <img
                  src="/placeholder.svg?height=250&width=500"
                  alt="Location map"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                    <Input placeholder="John Doe" className="bg-white" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                    <Input type="email" placeholder="you@example.com" className="bg-white" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                  <Input placeholder="e.g., Reservation Inquiry" className="bg-white" />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <Textarea placeholder="Write your message here..." className="bg-white min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full md:w-auto md:float-right">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
