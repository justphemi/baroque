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
      const response = await fetch(process.env.NEXT_PUBLIC_EMAIL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you. We have received your message.", {
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
    <div className="min-h-screen bg-white">
      <ToastContainer />
      <div className="relative brand-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-orange-600/15 rounded-full blur-[120px]" />
        <div className="relative text-center max-w-3xl mx-auto px-4">
          <p className="section-label mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">Get In Touch</h1>
          <p className="text-lg text-slate-300 leading-relaxed text-balance">
            Have a project in mind or a question for our team? We would love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <Card className="border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
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

              <Card className="border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
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

              <Card className="border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
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

            <Card className="border-slate-100 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-slate-500 mb-6">We typically respond within one business day.</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
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
                      <label className="block text-sm font-medium text-slate-700 mb-2">
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
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-base font-semibold rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="border-slate-100 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 w-full overflow-hidden">
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
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Our Office</h3>
                <p className="text-slate-600">
                  Located in the serene Rumuesara Estate, our office provides a professional environment for
                  consultations and meetings. We are easily accessible and offer ample parking for our clients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}