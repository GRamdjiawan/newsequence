"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import galleryData from "@/context/gallery.json"

type GalleryItemType = {
  id: number
  title: string
  category: "photography" | "video" | "3d"
  image: string
  location: string
  videoUrl?: string
}

const galleryItems: GalleryItemType[] = galleryData as GalleryItemType[]



function GalleryItem({
  item,
  index,
  onClick,
}: {
  item: GalleryItemType
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.category === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
      </div>
    </motion.div>
  )
}

export default function GalleryClientPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null)

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab)

  const openLightbox = (item: GalleryItemType) => {
    setSelectedItem(item)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Browse our portfolio of stunning real estate photography, videos, and 3D renders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="photography">Photography</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="3d">3D Renders</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <GalleryItem key={item.id} item={item} index={index} onClick={() => openLightbox(item)} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white z-10 bg-black/50 hover:bg-black/70"
              onClick={closeLightbox}
            >
              ✕
            </Button>

            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-[60vh]">
                {selectedItem.category === "video" ? (
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <p className="text-white">Video player would be here</p>
                  </div>
                ) : (
                  <Image
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Location: {selectedItem.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400 capitalize">
                  Category: {selectedItem.category === "3d" ? "3D Rendering" : selectedItem.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Like What You See?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us to discuss how we can create stunning visuals for your property
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
