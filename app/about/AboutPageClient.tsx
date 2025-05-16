"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Lead Photographer",
    bio: "With over 10 years of experience in real estate photography, Alex founded New Sequence to bring professional visual storytelling to property marketing.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Chen",
    role: "Videographer",
    bio: "Sarah specializes in cinematic property videos that capture the essence and flow of each space, creating emotional connections with potential buyers.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Rodriguez",
    role: "3D Artist",
    bio: "Michael creates photorealistic 3D renders and virtual staging that help clients visualize properties before they're built or fully furnished.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AboutPageClient() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About New Sequence</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                We're a team of visual storytellers dedicated to showcasing real estate properties through stunning
                photography, videography, and 3D rendering.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Founded in 2018, we've helped hundreds of real estate professionals, developers, and property owners
                present their spaces in the best possible light.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/imgs/IMG_0105.jpg"
                alt="New Sequence team at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              To transform how properties are presented through innovative visual media that connects with viewers on an
              emotional level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on quality, using professional equipment and techniques to deliver exceptional results every time.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly explore new technologies and creative approaches to stay at the forefront of real estate media.",
              },
              {
                title: "Service",
                description:
                  "We provide personalized service tailored to each client's unique needs, ensuring complete satisfaction.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/imgs/IMG_0129.jpg"
                alt="Our approach to real estate photography"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We believe that every property has a unique story to tell. Our approach combines technical expertise
                with creative vision to capture and communicate that story effectively.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Consultation",
                    description:
                      "We start by understanding your property and goals to develop a tailored visual strategy.",
                  },
                  {
                    title: "Preparation",
                    description: "We provide guidance on how to prepare the property to look its best for the shoot.",
                  },
                  {
                    title: "Production",
                    description: "Our team uses professional equipment and techniques to capture stunning visuals.",
                  },
                  {
                    title: "Post-Processing",
                    description:
                      "We enhance the raw material through careful editing to achieve the perfect final result.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The talented professionals behind New Sequence's stunning visual content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's create stunning visual content that showcases your property at its best
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
