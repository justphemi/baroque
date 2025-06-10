"use client"

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/xnnvpkql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-36 bg-white">
      <ToastContainer />
      <div className="text-center mb-2 bg-gradient-to-r from-orange-900 via-green-900 to-blue-900 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
          Get In Touch
        </h1>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Our Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        No. 1 Spring Bloom Drive
                        <br />
                        Rumuesara Estate, Eneka
                        <br />
                        Port Harcourt, Rivers State
                        <br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@baroquevariations.com"
                          className="hover:text-orange-600 transition-colors"
                        >
                          info@baroquevariations.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project or inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5234567890123!2d7.0123456789!3d4.8123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEneka%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baroque Variations Limited Location"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-orange-50 to-green-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visit Our Office
                </h3>
                <p className="text-gray-600">
                  Located in the serene Rumuesara Estate, our office provides a
                  professional environment for consultations and meetings. We're
                  easily accessible and offer ample parking for our clients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}