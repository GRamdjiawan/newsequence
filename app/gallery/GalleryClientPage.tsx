"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import galleryData from "@/context/gallery.json";

// Typings
type ProjectImage = {
  id: number;
  title: string;
  type: "photography" | "video" | "3d";
  src: string;
  videoUrl?: string;
};

type ProjectType = {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
};

type ImageItem = {
  id: number;
  title: string;
  src: string;
  type: string; // e.g., "photo", "video", "3d"
};
// Sample projects data from local JSON
const projects: ProjectType[] = galleryData as ProjectType[];

// Filter options for projects
const categories = ["All", "Residential", "Commercial"];

export default function GalleryClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const router = useRouter();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
    setSelectedImage(null);
    // Update URL without full navigation
    router.push(`/gallery?project=${project.id}`, { scroll: false });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setSelectedImage(null);
    router.push("/gallery", { scroll: false });
  };

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

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
              Browse our portfolio of stunning real estate photography, videos,
              and 3D renders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {!selectedProject ? (
            <>
              {/* Category Filter */}
              <div className="flex justify-center mb-12">
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      className="overflow-hidden cursor-pointer h-full"
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="relative h-64">
                        <Image
                          src={project.coverImage || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {project.location}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {project.category}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Project Detail View */}
              <div className="mb-8">
                <Button
                  variant="ghost"
                  onClick={handleBackToProjects}
                  className="mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Button>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {selectedProject.location}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                  {selectedProject.description}
                </p>
              </div>

              {/* Project Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProject.images.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="cursor-pointer relative group"
                    onClick={() => handleImageClick(image)}
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {image.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <h4 className="font-medium">{image.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {image.type === "3d" ? "3D Rendering" : image.type}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={handleCloseImage}
            >
              <div
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white z-10 bg-black/50 hover:bg-black/70"
                  onClick={handleCloseImage}
                >
                  ✕
                </Button>

                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                  <div className="relative h-[70vh]">
                    {selectedImage.type === "video" ? (
                      <div className="w-full h-full flex items-center justify-center bg-black">
                        <p className="text-white">Video player would be here</p>
                        {/* In a real app, this would be a video player component */}
                      </div>
                    ) : (
                      <Image
                        src={selectedImage.src || "/placeholder.svg"}
                        alt={selectedImage.title}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 capitalize">
                      {selectedImage.type === "3d"
                        ? "3D Rendering"
                        : selectedImage.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Like What You See?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us to discuss how we can create stunning visuals for your
              property
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
