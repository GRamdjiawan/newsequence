"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // In a real application, this would be an API call
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(values),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
      setShowCalendly(true);
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get in touch to discuss your real estate media needs or schedule a
              session
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="photography">
                              Photography
                            </SelectItem>
                            <SelectItem value="videography">
                              Videography
                            </SelectItem>
                            <SelectItem value="3d-rendering">
                              3D Rendering
                            </SelectItem>
                            <SelectItem value="full-package">
                              Full Package
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project or inquiry"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Info & Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:info@newsequence.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        info@newsequence.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Photography Lane
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Section */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm flex-1">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Schedule a Session</h2>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Book a consultation or photography session directly using our
                  online calendar.
                </p>

                <Button
                  onClick={() =>
                    window.open(
                      "https://zcal.co/profgianni",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="w-full"
                  variant="outline"
                >
                  <Calendar className="mr-2 h-4 w-4" /> Open Scheduling Calendar
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
